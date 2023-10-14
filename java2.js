function calculatePrice() {
    var kolvo = parseInt(document.getElementById("kol").value);
    var tovar = document.querySelector('input[name="tovar"]:checked').value;
    var option = document.getElementById("option").value;
    var svva = document.getElementById("svva").checked;
    var cost = 0;
    var prices = getPrices();

    if (tovar === "1") {
        cost = prices.prodTypes[0];
    } else if (tovar === "2") {
        if (option === "option1") {
            cost =prices.prodOptions.option1+prices.prodTypes[1]
        } else if (option === "option2") {
            cost =prices.prodOptions.option2+prices.prodTypes[1]
        } else if (option === "option3") {
            cost += prices.prodOptions.option3+prices.prodTypes[1]
        }
    } else if (tovar === "3") {
        cost = prices.prodTypes[2];
    }
    if (svva) {
        cost +=prices.prodProperties.prop1
    }

    var totalPrice = cost * kolvo;

    document.getElementById("rez").innerHTML = "Общая стоимость: " + totalPrice + " рублей";
}

document.getElementById("kol").addEventListener("input", calculatePrice);
document.querySelectorAll('input[name="tovar"]').forEach(function(element) {
    element.addEventListener("input", calculatePrice);
});
document.getElementById("option").addEventListener("input", calculatePrice);
document.getElementById("svva").addEventListener("input", calculatePrice);


function getPrices() {
    return {
    prodOptions: {
    option1:0,
    option2: 3000,
    option3: 5000
    },
    prodProperties: {
    prop1: 1000
    },
    prodTypes: [80000, 10000, 14000]
    };
}

var radi = document.querySelectorAll('input[name="tovar"]');
for (var i = 0; i < radi.length; i++) 
{
    radi[i].addEventListener("change", function() 
    {
        var service = document.querySelector('input[name="tovar"]:checked').value;
        if (service === "1") 
        {
            document.getElementById("options").style.display = "none";
            document.getElementById("sv").style.display = "none";
        }
        else if (service === "2") 
        {
            document.getElementById("options").style.display = "block";
            document.getElementById("sv").style.display = "none";
        }
        else if (service === "3") 
        {
            document.getElementById("options").style.display = "none";
            document.getElementById("sv").style.display = "block";
        }
    });
}

  function calculate() {
    var r;
    var f1;
    var f2;
    r = document.getElementById("result1");
    r.innerHTML = "";
    f1 = document.getElementById("kol1").value;
    f2 = document.getElementsByName("product")[0].value;
    if (/\D/.test(f1)) {
      alert("!!!Допускаются только цифры: 0-9!!!");
      return;
    }
    r.innerHTML = f1 * f2+ " "+"рублей";
  }
  
  document.addEventListener("DOMContentLoaded", function (event) {
    var b = document.getElementById("btn");
    console.log(event.type + " на " + event.currentTarget);
    b.addEventListener("click", calculate);
  });
