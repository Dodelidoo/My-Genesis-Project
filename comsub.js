



   

    // };

    // function test() {
    //     var x = document.getElementById("Building_type").value

    //     if ()
    //     console.log(x)
    // };

//Residential

var RA = getElementbyId('res_app')
var RF = getElementbyId("res_floor")
var RB = getElementbyId("res_base")

//Commercial

var CMD = getElementbyId('com_distinct')
var CMF = getElementbyId("com_floor")
var CMB = getElementbyId("com_base")
var CMP = getElementbyId("com_park")
var CME = getElementbyId("com_elevator")

//Corporate

var CRER = getElementbyId("cor_ent_res")
var CRF = getElementbyId("cor_floor")
var CRB = getElementbyId("cor_base")
var CRP = getElementbyId("cor_park")
var CRMPF = getElementbyId("cor_max_ppl_floor")

//Hybrid

var HCD = getElementbyId("hyb_com_distinct")
var HF = getElementbyId("hyb_floor")
var HB = getElementbyId("hyb_base")
var HP = getElementbyId("hyb_park")
var HMPF = getElementbyId("hyb_max_ppl_floor")
var HMAT = getElementbyId("hyb_max_act_time")









// 1e button
$("#res-form").hide();
$("#com-form").hide();
$("#cor-form").hide();
$("#hyb-form").hide();

 //Click Residential
$(function(){

    console.log("base");
   $("#res-form").hide();
   $('#building-choise').change(function(){
       if ($('#building-choise').val() === 'residential_1'){
           $('#res-form').show();
       }else{
           $('#res-form').hide();
       }
   });
});

//Click Commercial
$(function(){
    console.log("base2");
   $("#com-form").hide();
   $('#building-choise').change(function(){
       if ($('#building-choise').val() === 'commercial_1'){
           $('#com-form').show();
       }else{
           $('#com-form').hide()
       }
   });
});

//Click Corporate
$(function(){
   $("#cor-form").hide();
   $('#building-choise').change(function(){
       if ($('#building-choise').val() === 'corporate_1'){
           $('#cor-form').show();
       }else{
           $('#cor-form').hide()
       }
   });
});

//Click Hybrid
$(function(){
   $("#hyb-form").hide();
   $('#building-choise').change(function(){
       if ($('#building-choise').val() ==='hybrid_1'){
           $('#hyb-form').show();
       }else{
           $('#hyb-form').hide()
       }
   });
});



//2e button




 //calculs
// Standard: 10%
// Premium: 13% 12345$
// Excellum: 16% 15400$

// Commercial: 6 cages, Excellum
// (6 * 15400$) * 1.16 = 107184$

// Residential: 13 floors (2 ss), 320 appart.
// (320 / 11) / 6 = 4.84 = 5       (Math.ceil)
// (5 * 7565) * 1.10 = 41607.50$



//     var Building_type  = function() {
    
//     text("Residential")
//     text("Commercial")
//     text("Corporate")
//     text("Hybrid")
    
//     }


// text(Number of appartments)
// var x = document.getElementById("Building_type").val
// text(number of floors)
// <button onclick="getElementById('demo').innerHTML = Date()">Residential</button>



//         if(Residential) {
           
//            var moy_app_floors = (nb_app / nb_floors);
//            var nb_cages = Math.ceil(moy_app_floors /6);
//            var nb_column = Math.ceil(nb_floors / 20)         
//            console.log;
//         }

// <button onclick="myFunction()">Residential</button>

//         $.each(collection, function (indexInArray, valueOfElement) { 
             
//         });


// $(function() {
//    $('#row_dim').hide();
//    $('#type').change(function(){
//        if($('#type').val() == 'parcel') {
//            $('#row_dim').show();
//        } else {
//            $('#row_dim').hide();
//        }
//    });
// });


// document.getElementById("demo").value




// // Get the button, and when the user clicks on it, execute myFunction
// document.getElementById("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }