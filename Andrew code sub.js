<script type="text/javascript">
                            function residentialChecked() {
                                if (document.getElementById('Residential').checked) {
                                    document.getElementById('ResidentialZone').style.display = 'block';
                                    document.getElementById('CorporateZone').style.display = 'none';
                                    document.getElementById('CommercialZone').style.display = 'none';
                                    document.getElementById('HybridZone').style.display = 'none';
                                }
                                else {
                                    document.getElementById('ResidentialZone').style.display = 'none';
                                }       
                            }
                            function CorporateChecked() {
                                if (document.getElementById('Corporate').checked) {
                                    document.getElementById('CorporateZone').style.display = 'block';
                                    document.getElementById('ResidentialZone').style.display = 'none';
                                    document.getElementById('CommercialZone').style.display = 'none';
                                    document.getElementById('HybridZone').style.display = 'none';
                                }
                                else 
                                { document.getElementById('CorporateZone').style.display = 'none';
                                
                            }
                            }
                            function CommercialChecked() {
                                if (document.getElementById('Commercial').checked) {
                                    document.getElementById('CommercialZone').style.display = 'block';
                                    document.getElementById('HybridZone').style.display = 'none';
                                    document.getElementById('ResidentialZone').style.display = 'none';
                                    document.getElementById('CorporateZone').style.display = 'none';
                                }
                                else document.getElementById('CommercialZone').style.display = 'none';
                            }
                            function HybridCheck() {
                                if (document.getElementById('Hybrid').checked) {
                                    document.getElementById('HybridZone').style.display = 'block';
                                    document.getElementById('ResidentialZone').style.display = 'none';
                                    document.getElementById('CorporateZone').style.display = 'none';
                                    document.getElementById('CommercialZone').style.display = 'none';
                                }
                                else document.getElementById('HybridZone').style.display = 'none';
                            }
                            </script>
                            Residential <input type="radio" onclick="javascript:residentialChecked();" name="yesno" id="Residential"> <br>
                            <div id="ResidentialZone" style="display:none">
                                    Number of Floors <input type='text' id='FloorNumb' name='yes'><br>
                                    Number of Basements  <input type='text' id='BasementNumb' name='acc'><br>
                                    Number of Apartments <input type='text' id='AppNumb' name='acc'>
                                </div>
                            Corporate <input type="radio" onclick="javascript:CorporateChecked();" name="yesno" id="Corporate"><br>
                            <div id="CorporateZone" style="display:none">
                                    Number of Floors <input type='text' id='FloorNumb' name='yes'><br>
                                    Number of Basements  <input type='text' id='BasementNumb' name='acc'><br>
                                    Number of Apartments <input type='text' id='AppNumb' name='acc'>
                                    Maximum People per Floor <input type='text' id='AppNumb' name='acc'>
                                    Number of Corporation in the Building <input type='text' id='AppNumb' name='acc'>
                                </div>
                            Commercial<input type="radio" onclick="javascript:CommercialChecked();" name="yesno" id="Commercial"><br>
                            <div id="CommercialZone" style="display:none">
                                    Number of Floors <input type='text' id='FloorNumb' name='yes'><br>
                                    Number of Basements  <input type='text' id='BasementNumb' name='acc'><br>
                                    Number of Apartments <input type='text' id='AppNumb' name='acc'>
                                    Number of Parking <input type='text' id='ParkingNumb' name='yes'><br>
                                    Number of Elevators <input type='text' id='ElevatorNumb' name='yes'><br>
                                </div>
                            Hybrid <input type="radio" onclick="javascript:HybridCheck();" name="yesno" id="Hybrid"><br>
                                <div id="HybridZone" style="display:none">
                                    Number of Floors <input type='text' id='FloorNumb' name='yes'><br>
                                    Number of Basements  <input type='text' id='BasementNumb' name='acc'><br>
                                    Number of Apartments <input type='text' id='AppNumb' name='acc'><br>
                                    Number of Parking <input type='text' id='ParkingNumb' name='yes'><br>
                                    Maximum Capacity of people  <input type='MaxPeopleNumb' id='acc' name='acc'><br>
                                    Number of Activity <input type='text' id='HoursNumb' name='acc'>
                                </div>