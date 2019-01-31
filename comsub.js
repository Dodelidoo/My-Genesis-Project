


   

    // };
    
    // function test() {
        //     var x = document.getElementById("Building_type").value
        
        //     if ()
        //     console.log(x)
        // };
        
        // 1e button
        $("#res-form").hide();
        $("#com-form").hide();
        $("#cor-form").hide();
        $("#hyb-form").hide();
        
        //Click Residential
        $(function(){
            
            //Residential
            
            // var RF = document.getElementbyId("res_floor")
            // var RB = document.getElementbyId("res_base")
            
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
        
        //calculs Residential
        
        
        function ResidentialCal() {
            
            var RA = document.getElementById('res_app').value;
            console.log(RA);
            var RF = document.getElementById("res_floor").value;
            console.log(RF)
            var MoyLE = ((RA / RF) / 6);
            var Floor20 = Math.ceil(RF / 20);
            var resCages = document.getElementById('res_cage')
            resCages.value = Math.ceil(Floor20 * MoyLE);
            document.getElementById('tot_elev').innerHTML = Floor20
         
        console.log(resCages.value);
        
    };


        
    
    $(document).ready(function(){
        $("input[type='radio']").on('click', function(){
            var radioValue = $("input[name='grade']:checked").val();
            if(radioValue == "7565" ){
                var costvalue = radioValue * 1.1
                
            }
            if(radioValue == "12345"){
                var costvalue = radioValue * 1.13

            }
            if(radioValue == "15400"){
                var costvalue = radioValue * 1.16

            }
        });
    });
    
    
    
    // $(function)() {
//Click Commercial
$(function(){

    //Commercial

    // var CMD = document.getElementbyId('com_distinct')
    // var CMF = document.getElementbyId("com_floor")
    // var CMB = document.getElementbyId("com_base")
    // var CMP = document.getElementbyId("com_park")
    // var CME = document.getElementbyId("com_elevator")

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

//Commercial Calculs

function ComCal() {
   
   
  var Tabarnack = document.getElementById('com_elevator').value

  var test = Tabarnack;

  document.getElementById('com_elev_recom').innerHTML = test;
}


//Click Corporate
$(function(){

    //Corporate

    // var CRER = document.getElementbyId("cor_ent_res")
    // var CRF = document.getElementbyId("cor_floor")
    // var CRB = document.getElementbyId("cor_base")
    // var CRP = document.getElementbyId("cor_park")
    // var CRMPF = document.getElementbyId("cor_max_ppl_floor")


   $("#cor-form").hide();
   $('#building-choise').change(function(){
       if ($('#building-choise').val() === 'corporate_1'){
           $('#cor-form').show();
       }else{
           $('#cor-form').hide()
       }
   });
});

//Corporate calculs

   function CorCal() {
     var max_ppl_tot = cor_max_ppl_floor * (cor_floor + cor_base);
     console.log(max_ppl_tot)
     var cor_elev_recom = (max_ppl_tot /1000);
     console.log(cor_elev_recom)
     var cor_col_elev_recom = (cor_floor + cor_base) / 20 ;
     console.log(cor_col_elev_recom)
     var cor_tot_elev = (cor_elev_recom / cor_col_elev_recom) ;
     console.log(cor_tot_elev)
     document.getElementById("cor_elev_recom") = cor_tot_elev ;
    var Big_tot = cor_tot_elev * cor_col_elev
    console.log(Big_tot)
    document.getElementById('TOTAL') = Big_tot
} 






//Click Hybrid
$(function(){

    // //Hybrid
    
    // var HCD = document.getElementbyId("hyb_com_distinct")
    // var HF = document.getElementbyId("hyb_floor")
    // var HB = document.getElementbyId("hyb_base")
    // var HP = document.getElementbyId("hyb_park")
    // var HMPF = document.getElementbyId("hyb_max_ppl_floor")
    // var HMAT = document.getElementbyId("hyb_max_act_time")
    
    $("#hyb-form").hide();
    $('#building-choise').change(function(){
        if ($('#building-choise').val() ==='hybrid_1'){
            $('#hyb-form').show();
        }else{
            $('#hyb-form').hide()
        }
   });
});

//hybrid calculs


function HybCal() {
    var max_ppl_tot = hyb_max_ppl_floor * (hyb_floor + hyb_base);

    var hyb_elev_recom = (max_ppl_tot /1000);

    var hyb_col_elev_recom = (hyb_floor + hyb_base) / 20 ;

    var hyb_tot_elev = (hyb_elev_recom / hyb_col_elev_recom) ;

    document.getElementById('tot_elev').innerHTML =  hyb_tot_elev;
}




// document.getElementById('tot_elev').innerHTML = 
// document.getElementById('P_of_a_e').innerHTML = 
// document.getElementById('Inst_fee').innerHTML = 
// document.getElementById('TOTAL').innerHTML = 



//2e button

// console.log(RA)


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