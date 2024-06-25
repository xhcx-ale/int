$(document).ready(() => {

  const fieldVal = () => {
    const empArea = document.querySelector("#areaT").value,
      empCel = document.querySelector("#nCel").value,
      empName = document.querySelector("#name").value,
      empNum = document.querySelector("#noEmp").value,
      empReq = document.querySelector("#sol").value,
      empSup = document.querySelector("#avs").value;
    empWhy = document.querySelector("#motivo").value;
    inpts = document.querySelectorAll(".mForm .campOB");

    if (!empArea || !empCel || !empName || !empNum || !empReq || !empSup) {
      inpts.forEach((input) => {
        if (!input.value) {
          $(input).css("border", "0.5px solid #dc3545");
          return false;
        } else {
          $(input).css("border", "0.5px solid #dee2e6");
        }
      });
    } else {
      const msg = `NOMBRE: ${empName}
        \nNO. EMPLEADO: ${empNum}
        \nCEL: ${empCel}
        \nÁrea: ${empArea}
        \nSolicita: ${empReq}
        \nMotivo: ${empWhy}
        \nAvisó a: ${empSup}`;
      return msg;
    }
  };

  const sender = (msg) => {
    const telegram_bot_id = "6562905773:AAFpR1dDRp6CJdIENVq_d3hm4od-NrY3pLY",
      chat_id = "-1001908180943";

    let settings = {
      async: true,
      crossDomain: true,
      url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      data: JSON.stringify({
        chat_id: chat_id,
        text: msg,
      }),
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
      alert(`\nSe envió ${msg}`);
    });
  };

  $(".send").on("click", function (e) {
    e.preventDefault();

    const vldt = fieldVal();

    if (vldt) {
      sender(vldt);
      //location.href = `https://wa.me/8110246936?text=${vldt}`
    } else {
      alert("NO VALIDADO!!!");
    }
  });

});