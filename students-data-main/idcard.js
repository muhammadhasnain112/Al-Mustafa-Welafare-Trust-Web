function generatePDF(data, triggeringButton = null) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const downloadBtn = triggeringButton;
  const originalText = downloadBtn ? downloadBtn.innerHTML : "";

  if (downloadBtn) {
    downloadBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Generating...';
    downloadBtn.disabled = true;
  }

  // Colors
  const colors = {
    primary: "#1a365d",
    secondary: "#2c5282",
    accent: "#4299e1",
    lightBg: "#f7fafc",
    darkText: "#1a202c",
    mediumText: "#4a5568",
    lightText: "#718096",
    borderColor: "#1a365d",
  };

  try {
    // Create QR code
    const qrDiv = document.createElement("div");
    qrDiv.style.position = "absolute";
    qrDiv.style.left = "-9999px";
    document.body.appendChild(qrDiv);

    const qr = new QRCode(qrDiv, {
      text: data.rollNumber,
      width: 80,
      height: 80,
      colorDark: colors.primary,
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });

    // Load images
    Promise.all([
      loadImage(data.profileImageUrl),
      loadImage("img/logo.png"), // apna logo yahan rakho
      new Promise((resolve) => {
        setTimeout(() => {
          const qrCanvas = qrDiv.querySelector("canvas");
          if (!qrCanvas) throw new Error("QR code not found");
          resolve(qrCanvas.toDataURL("image/png"));
        }, 300);
      }),
    ])
      .then(([profileImage, logoImage, qrDataUrl]) => {
        renderIDCard(profileImage, logoImage, qrDataUrl);
      })
      .catch((error) => {
        console.error("Image loading error:", error);
        alert("Error loading images: " + error.message);
        cleanup();
      });

    // Image loader
    function loadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = () =>
          reject(new Error(`Failed to load image from ${url}`));
        img.src = url;
      });
    }

    // Render ID card
    function renderIDCard(profileImg, logoImg, qrDataUrl) {
      try {
        const cardWidth = 86;
        const cardHeight = 54;
        const padding = 10;
        const cardY = padding;

        // ==== FRONT SIDE ====
        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(colors.borderColor);
        doc.roundedRect(padding, cardY, cardWidth, cardHeight, 2, 2, "FD");

        // Header
        doc.setFillColor(colors.primary);
        doc.roundedRect(padding, cardY, cardWidth, 10, 2, 2, "F");
        doc.addImage(logoImg, "PNG", padding + 2, cardY + 1, 8, 8);
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text("INSTITUTE OF SEP", padding + cardWidth / 2, cardY + 6.5, {
          align: "center",
        });

        // Subheader
        doc.setTextColor(colors.primary);
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text("STUDENT ID CARD", padding + cardWidth / 2, cardY + 16, {
          align: "center",
        });

        // Photo
        doc.setDrawColor(colors.secondary);
        doc.roundedRect(padding + 3, cardY + 20, 24, 30, 1, 1, "S");
        doc.addImage(profileImg, "JPEG", padding + 4, cardY + 20, 22, 28);

        // Student Info
        let infoX = padding + 32;
        let infoY = cardY + 25;

        function addInfo(label, value, bold = false) {
          doc.setTextColor(colors.mediumText);
          doc.setFontSize(6);
          doc.setFont("helvetica", "normal");
          doc.text(label + ":", infoX, infoY);

          doc.setTextColor(bold ? colors.primary : colors.darkText);
          doc.setFont("helvetica", bold ? "bold" : "normal");
          doc.text(value || "N/A", infoX + 20, infoY);

          infoY += 5;
        }

        addInfo("Roll No", data.rollNumber, true);
        addInfo("Name", data.name?.toUpperCase(), true);
        addInfo("Father", data.fatherName, true);
        addInfo("Course", data.course, true);
        addInfo("Branch", data.branch, true);

        // ==== BACK SIDE ====
        const backX = padding + cardWidth + 10;

        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(colors.borderColor);
        doc.roundedRect(backX, cardY, cardWidth, cardHeight, 2, 2, "FD");

        doc.setFillColor(colors.primary);
        doc.roundedRect(backX, cardY, cardWidth, 10, 2, 2, "F");
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(9);
        doc.text("INSTITUTE OF SEP", backX + cardWidth / 2, cardY + 6.5, {
          align: "center",
        });

        if (qrDataUrl) {
          doc.addImage(qrDataUrl, "PNG", backX + 10, cardY + 15, 20, 20);
          doc.setTextColor(colors.mediumText);
          doc.setFontSize(6);
          doc.text("Scan to verify", backX + 20, cardY + 38, {
            align: "center",
          });
        }

        const signatureY = cardY + 30;
        const signatureX = backX + cardWidth - 35;
        doc.setDrawColor(colors.mediumText);
        doc.line(signatureX, signatureY, signatureX + 25, signatureY);
        doc.setFontSize(5);
        doc.text("Authorized Signature", signatureX + 12.5, signatureY + 5, {
          align: "center",
        });

        // Stamp
        doc.setDrawColor(colors.accent);
        doc.setLineDash([1, 1], 0);
        doc.rect(signatureX, signatureY + 8, 25, 15);
        doc.setTextColor(colors.accent);
        doc.setFontSize(5);
        doc.text("OFFICIAL STAMP", signatureX + 12.5, signatureY + 16, {
          align: "center",
        });
        doc.setLineDash([], 0);

        doc.setFontSize(4);
        doc.setTextColor(colors.lightText);
        doc.text(
          "Official SEP ID Card",
          backX + cardWidth / 2,
          cardY + cardHeight - 5,
          { align: "center" }
        );

        // ===== INSTRUCTIONS =====
        doc.setDrawColor(200, 200, 200);
        doc.line(padding, 70, 200, 70);

        doc.setFontSize(8);
        doc.setTextColor(colors.primary);
        doc.setFont("helvetica", "bold");
        doc.text("Important Instructions:", padding, 76);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(6);
        const instructions = [
          "1. This card must be carried at all times.",
          "2. Report lost cards immediately.",
          "3. Tampering is prohibited.",
          "4. Like us: facebook.com/SEPInstitute",
        ];

        let y = 82;
        instructions.forEach((line) => {
          if (line.includes("facebook.com")) {
            doc.setTextColor(colors.accent);
            doc.textWithLink(line, padding + 2, y, {
              url: "https://facebook.com/SEPInstitute",
            });
          } else {
            doc.setTextColor(colors.darkText);
            doc.text(line, padding + 2, y);
          }
          y += 5;
        });

        // ==== Save PDF ====
        const fileName = `${data.name?.replace(/\s+/g, "_")}_SEP_ID.pdf`;
        doc.save(fileName);
      } catch (e) {
        console.error("PDF rendering error:", e);
        alert("Error generating PDF: " + e.message);
      } finally {
        cleanup();
      }
    }

    function cleanup() {
      if (document.body.contains(qrDiv)) {
        document.body.removeChild(qrDiv);
      }
      if (downloadBtn) {
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
      }
    }
  } catch (e) {
    console.error("Initial error:", e);
    alert("Error initializing PDF: " + e.message);
    if (downloadBtn) {
      downloadBtn.innerHTML = originalText;
      downloadBtn.disabled = false;
    }
  }
}
