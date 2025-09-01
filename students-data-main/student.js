const supabaseUrl = "https://uryazsueiysgjjchkbwl.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeWF6c3VlaXlzZ2pqY2hrYndsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMDE0MTEsImV4cCI6MjA3MDU3NzQxMX0.2WrDpY_ZDvBbtRSjmic5n1jkZk3ZSU6x5xqce6kY-8A`;
const client = supabase.createClient(supabaseUrl, supabaseKey);

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");
const form = document.getElementById("form");

phoneInput.addEventListener("input", function () {
  const cleaned = this.value.replace(/\D/g, "");
  this.value = cleaned;
  validatePhone();
});

function isValidPakistaniPhone(number) {
  return /^03[0-9]{9}$/.test(number);
}

function validatePhone() {
  const phone = phoneInput.value.trim();
  if (!isValidPakistaniPhone(phone)) {
    phoneInput.classList.add("invalid");
    phoneError.textContent = "Number only Pakistani allowed";
    return false;
  } else {
    phoneInput.classList.remove("invalid");
    phoneError.textContent = "";
    return true;
  }
}

const campus = document.getElementById("campus");

async function loadCampuses() {
  try {
    const { data: campuses, error } = await client
      .from("campuses")
      .select("name")
      .order("name");

    if (error) {
      throw error;
    }

    // Add campuses to UI
    campuses.forEach((getCampus) => {
      console.log(getCampus.name);
      campus.innerHTML += `<option value="${getCampus.name}">${getCampus.name}</option>`;
    });
  } catch (error) {
    console.error("Error loading campuses:", error);
    // Keep the default campuses if there's an error
  }
}



form.addEventListener("submit", async function submitData(e) {
  e.preventDefault();

  const loading = document.getElementById("loading");
  const msg = document.getElementById("msg");

  const name = document.getElementById("name").value.trim();
  const father = document.getElementById("father").value.trim();
  const phone = phoneInput.value.trim();
  const cnic = document.getElementById("cnic").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const course = document.getElementById("course").value;
  const campus = document.getElementById("campus").value;
  const qualification = document.getElementById("qualification").value;
  const branch = document.getElementById("branch").value;
  const address = document.getElementById("address").value.trim();
  const profileImage = document.getElementById("profile-image").files[0];


  console.log("profile========>", profileImage);
  
  msg.textContent = "";
  msg.className = "";

  if (!validatePhone()) return;

  if (
    !name ||
    !father ||
    !phone ||
    !cnic ||
    !gender ||
    !course ||
    !qualification ||
    !branch ||
    !campus ||
    !address ||
    !profileImage
  ) {
    msg.textContent = "Please fill all fields and upload a profile image.";
    msg.className = "error";
    return;
  }
    console.log("profile========>", profileImage);

  loading.classList.add("active");

  try {
    // upload profile image
    const fileName = `profile/${Date.now()}_${profileImage.name}`;
    const { data: fileData, error: fileError } = await client.storage
      .from("profile-pics")
      .upload(fileName, profileImage);

    if (fileError) throw new Error(fileError.message);

    const { data: publicData } = client.storage
      .from("profile-pics")
      .getPublicUrl(fileData.path);

    const publicUrl = publicData.publicUrl;

    console.log(publicUrl);
    // roll number
    let rollNumberCounter = localStorage.getItem("rollNumberCounter") || 1000;
    rollNumberCounter++;
    localStorage.setItem("rollNumberCounter", rollNumberCounter);

    const insertData = {
      name,
      father_name: father,
      phone,
      cnic,
      gender,
      course,
      qualification,
      branch,
      campus,
      address,
      profile_image: publicUrl,
      status: "pending", // by default pending
      created_at: new Date().toISOString(),
    };
    console.log(insertData);

    // insert into supabase
    const { error: insertError } = await client
      .from("students")
      .insert([insertData]);
    if (insertError) throw new Error(insertError.message);

    // prepare data for ID card
    const cardData = {
      name,
      fatherName: father,
      cnic,
      course,
      branch,
      campus,
      profileImageUrl: publicUrl,
      status: "Active", // force card generation
      rollNumber: `SEP-${rollNumberCounter}`,
    };

    // generate & download PDF immediately

    // redirect immediately
    generatePDF(cardData);



    form.reset();
    // window.location.href = "thanks.html";
  } catch (err) {
    msg.textContent = err.message || "Unexpected error occurred.";
    msg.className = "error";
  } finally {
    loading.classList.remove("active");
  }
});
document.addEventListener("DOMContentLoaded", loadCampuses);
