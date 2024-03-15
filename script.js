function tampilkanData() {
    var nama = document.getElementById("nama").value;
    var pekerjaan = document.getElementById("pekerjaan").value;
    var hobi = document.getElementById("hobi").value;
  
    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "<h2>Hasil:</h2>" +
                      "<table style='margin: auto; border-collapse: collapse; width: 70%;'>" +
                      "<thead style='background-color: black; color: white;'>" +
                      "<tr><th style='padding: 12px 15px; text-align: left;'>Nama</th><th style='padding: 12px 15px; text-align: left;'>Pekerjaan</th><th style='padding: 12px 15px; text-align: left;'>Hobi</th></tr>" +
                      "</thead>" +
                      "<tbody>" +
                      "<tr><td style='border-bottom: 2px solid black; padding: 12px 15px;'>" + nama + "</td><td style='border-bottom: 2px solid black; padding: 12px 15px;'>" + pekerjaan + "</td><td style='border-bottom: 2px solid black; padding: 12px 15px;'>" + hobi + "</td></tr>" +
                      "</tbody>" +
                      "</table>";
  }