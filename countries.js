    var countrysH={}; 

    function inputCountry(){
    var c=prompt('Введите страну','Беларусь');
    var cap=prompt('Введите столицу','Минск');
        if(c || cap){    
        addCountry(c,cap);}
            else{
                alert("Error");}
    }

    function addCountry(countryName,capitalName) {
        countrysH[countryName]=capitalName;

    }
    function inputdel(){
        var d=prompt('Введите страну');
        if(d in countrysH){
            deleteCountry(d);
            alert(d + ' удалена из базы !' );
        }else{
            alert('Нет информации о стране ' + d + '!' );
        }
    }

    function deleteCountry(countryName) {
        delete countrysH[countryName];
    }
    function info(){
        var g=prompt('Введите страну');
        getCountryInfo(g);
        alert(getCountryInfo(g));  
    }
    function getCountryInfo(countryName) {
        if ( countryName in countrysH )
            return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
        else
            return 'нет информации о стране ' + countryName + '!';
            
    }

    function listCountrys() {
        var res="";
        for ( var CN in countrysH )
            res+=getCountryInfo(CN) +'\n';
        
      //  alert( "список стран: " + res );
        document.getElementById("resultcan").innerHTML = "<b>Cписок стран </b>: <br>" + res;
      //  return res;        
    }
  
    $(function() {
        var savedCountries = localStorage['saved'];
        if (savedCountries) {
            countrysH = JSON.parse(savedCountries);
        }
        $(window).unload(function() {
            window.localStorage['saved'] = JSON.stringify(countrysH);
        });
  
    });

    addCountry('Германия','Берлин');
    addCountry('Венгрия','Будапешт');
    addCountry('Франция', 'Париж');

    //alert( "список стран:" + listCountrys() );


