function ajaxAtt(value,key,Id){
    $.ajax({
        type: "POST",
        url: "call.php",
        data: {
            value:value,
            key:key,
            Id:Id
        }
      }).done(function( msg ) {
      });
    }
    function ajaxAtt2(value,key,Id){
        $.ajax({
            type: "POST",
            url: "New.php",
            data: {
                name:value[0],
                explicacao:value[1],
                d20:value[2],
                d12:value[3],
                d10:value[4],
                d8:value[5],
                d6:value[6],
                d4:value[7],
                list:value[8],
                player:value[9],
                namepersonagem:value[10],
                key: key,
                Id: Id}
          }).done(function( msg ) {
            alert (msg);
          });
        }
    function ajaxAtt3(name,id,info,local,fname){
        $.ajax({
            type: "POST",
            url: "infosadd.php",
            data: {
                name:name,
                id:id,
                info:info,
                local:local}
            }).done(function(msg) {   
                
              });
              
    }

function Atualizar(personagemC,playerC,Idade,Aparencia,EstilodeLuta,Classz,Raça,Fruta,VidaAtual,VidaMax,Ifecção,StatusForça,StatusDestreza,StatusConstituição,StatusInteligência,StatusSabedoria,StatusCarisma,Historia,Beris,Inventário,StatusHaki){
    document.getElementById("name").innerHTML = personagemC;
    document.getElementById("player").innerHTML = playerC;
    document.getElementById("Idade").value = Idade;
    document.getElementById("Aparencia").value = Aparencia;
    document.getElementById("EstilodeLuta").value = EstilodeLuta;
    document.getElementById("classe").value = Classz;
    document.getElementById("raca").value = Raça;
    document.getElementById("Fruta").value = Fruta;
    document.getElementById("vidaatual").value = VidaAtual;
    document.getElementById("vidamax").value = VidaMax;
    document.getElementById("infec").value = Ifecção;
    document.getElementById("forcaa").value = StatusForça;
    document.getElementById("destrezaa").value = StatusDestreza;
    document.getElementById("constituicaoo").value = StatusConstituição;
    document.getElementById("inteligenciaa").value = StatusInteligência;
    document.getElementById("sabedoriaa").value = StatusSabedoria;
    document.getElementById("carismaa").value = StatusCarisma;
    document.getElementById("Lore").value = Historia;
    document.getElementById("dinheiro").value = Beris;
    document.getElementById("Inventario").value = Inventário;
    document.getElementById("hakii").value = StatusHaki;

    Status(forcaa,btnforcaa);
    Status(destrezaa,btndestrezaa);
    Status(constituicaoo,btnconstituicaoo);
    Status(inteligenciaa,btninteligenciaa);
    Status(sabedoriaa,btnsabedoriaa);
    Status(carismaa,btncarismaa);




}

function d20(nf,num){ return '<div class="text-center"><a href="#" '+nf+' style="color:inherit;"><div id="normal1">'+
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 200 228" version="1.1">'+
        '<g id="surface1">'+
        '<path  d="M 82.398438 18.632812 C 74.699219 27.203125 62.5 40.957031 55.101562 49.226562 L 41.601562 64.273438 L 98 64.574219 C 129 64.671875 154.601562 64.574219 154.898438 64.273438 C 155.199219 63.875 155 63.378906 154.398438 62.980469 C 153.800781 62.582031 146.199219 54.210938 137.5 44.34375 C 102.300781 4.582031 100.800781 2.988281 98.5 2.988281 C 96.800781 2.988281 92.601562 7.074219 82.398438 18.632812 Z M 82.398438 18.632812 "/>'+
        '<path  d="M 45.5 29.496094 C 27.898438 39.660156 12 48.628906 10.300781 49.527344 C 6.398438 51.519531 6.199219 52.515625 9.300781 53.710938 C 10.5 54.210938 15.101562 56.203125 19.5 58.296875 C 32.898438 64.574219 30.699219 65.769531 54.5 38.863281 C 65.898438 26.007812 76 14.648438 76.800781 13.652344 C 77.601562 12.753906 78.101562 11.757812 77.898438 11.558594 C 77.699219 11.261719 63.101562 19.433594 45.5 29.496094 Z M 45.5 29.496094 "/>'+
        '<path  d="M 118 11.558594 C 118 12.058594 137.699219 34.777344 139.101562 35.875 C 139.398438 36.171875 143 40.160156 147 44.84375 C 151 49.527344 156.199219 55.304688 158.601562 57.796875 C 161 60.289062 163 62.582031 163 62.980469 C 163 63.476562 163.699219 63.777344 164.5 63.777344 C 166.5 63.777344 190.398438 53.214844 190.699219 52.117188 C 190.898438 51.71875 185.5 48.230469 178.699219 44.445312 C 172 40.65625 156.101562 31.589844 143.398438 24.214844 C 122.101562 12.058594 118 9.964844 118 11.558594 Z M 118 11.558594 "/>'+
        '<path  d="M 1 101.742188 C 1 134.628906 1.300781 144.59375 2.199219 144.292969 C 2.898438 143.996094 3.699219 142.800781 4.101562 141.402344 C 4.5 140.109375 6.199219 135.226562 7.898438 130.542969 C 15.300781 109.816406 19.300781 98.453125 22.601562 88.6875 C 24.601562 82.910156 26.5 77.527344 27 76.730469 C 27.398438 75.933594 28 74.039062 28.300781 72.644531 C 29 69.855469 28.300781 69.457031 8.800781 60.886719 C 0.300781 57.101562 1 53.511719 1 101.742188 Z M 1 101.742188 "/>'+
        '<path  d="M 182 63.578125 C 176.199219 66.167969 170.699219 68.757812 169.699219 69.355469 C 168 70.351562 168.601562 72.546875 178.601562 100.746094 C 184.398438 117.386719 190.398438 134.328125 191.800781 138.214844 C 193.101562 142.199219 194.601562 145.289062 194.898438 145.089844 C 195.199219 144.890625 195.398438 125.359375 195.199219 101.742188 C 195 68.558594 194.699219 58.792969 193.699219 58.792969 C 193.101562 58.894531 187.800781 60.984375 182 63.578125 Z M 182 63.578125 "/>'+
        '<path  d="M 40 72.746094 C 40 73.242188 42.601562 78.226562 45.800781 83.90625 C 51.398438 93.671875 63.601562 115.195312 67.699219 122.570312 C 68.800781 124.464844 73.398438 132.535156 78 140.40625 C 82.5 148.28125 87.5 157.050781 89.101562 159.839844 C 90.800781 162.628906 93.300781 167.3125 94.699219 170.203125 C 96.199219 172.992188 98 175.382812 98.699219 175.382812 C 99.398438 175.382812 100 174.984375 100 174.488281 C 100 173.988281 103.101562 168.308594 106.800781 161.832031 C 110.5 155.253906 115.898438 145.886719 118.699219 141.003906 C 131.601562 117.984375 142.800781 98.453125 147.199219 90.882812 C 149.800781 86.398438 152 82.410156 152 82.113281 C 152 81.914062 153.101562 79.917969 154.5 77.726562 C 155.898438 75.535156 157 73.34375 157 72.746094 C 157 72.046875 137.601562 71.75 98.5 71.75 C 62.199219 71.75 40 72.148438 40 72.746094 Z M 40 72.746094 "/>'+
        '<path  d="M 32 81.414062 C 30.300781 86.695312 23 107.722656 21.898438 110.113281 C 21.5 111.210938 18.101562 120.578125 14.5 131.039062 C 10.800781 141.402344 6.699219 153.0625 5.398438 156.75 C 4.101562 160.535156 3 164.125 3 164.820312 C 3 165.617188 4.601562 166.417969 6.699219 166.714844 C 10.5 167.214844 30.300781 170.003906 51.5 172.992188 C 79.800781 177.078125 91.199219 178.472656 91.699219 178.074219 C 91.800781 177.875 89.800781 173.988281 87.199219 169.304688 C 81.199219 158.941406 63.398438 127.550781 48.699219 101.644531 C 33 73.839844 34 75.035156 32 81.414062 Z M 32 81.414062 "/>'+
        '<path  d="M 161.300781 78.921875 C 160.5 80.019531 147.5 102.640625 131 132.035156 C 129.800781 134.230469 125.300781 142.101562 121 149.476562 C 116.800781 156.851562 111.398438 166.417969 109.101562 170.699219 L 104.800781 178.574219 L 109.601562 177.976562 C 118 176.878906 128.101562 175.484375 138 173.988281 C 143.199219 173.191406 150 172.296875 153 171.898438 C 173 169.703125 194 166.117188 194 164.921875 C 194 164.324219 192.199219 158.644531 189.898438 152.367188 C 187.699219 146.085938 185.5 139.910156 185 138.515625 C 184.5 137.117188 181.898438 129.546875 179 121.574219 C 173.101562 104.933594 166.300781 85.699219 164.699219 80.917969 C 163.601562 77.429688 162.800781 77.03125 161.300781 78.921875 Z M 161.300781 78.921875 "/>'+
        '<path  d="M 19.101562 176.878906 C 19.898438 177.675781 24.199219 180.464844 28.601562 182.957031 C 41.101562 190.234375 49.601562 195.117188 53.199219 197.207031 C 55 198.203125 64.699219 203.785156 74.800781 209.664062 C 84.898438 215.445312 93.601562 220.226562 94.101562 220.226562 C 94.699219 220.226562 94.898438 213.449219 94.800781 203.085938 L 94.5 185.949219 L 87 184.75 C 79.5 183.554688 76.101562 183.058594 48.5 179.371094 C 40.300781 178.273438 30.5 176.878906 26.800781 176.382812 C 17.699219 174.984375 17.300781 175.085938 19.101562 176.878906 Z M 19.101562 176.878906 "/>'+
        '<path  d="M 161 177.476562 C 148.699219 179.371094 129.601562 182.0625 111.300781 184.453125 L 102 185.75 L 102 202.988281 C 102 212.453125 102.398438 220.226562 102.898438 220.226562 C 103.699219 220.226562 131.398438 204.582031 139.199219 199.601562 C 141.300781 198.402344 143.199219 197.308594 143.398438 197.308594 C 143.601562 197.308594 148.5 194.617188 154.199219 191.230469 C 159.898438 187.839844 167 183.753906 170 182.0625 C 177.800781 177.777344 179 176.980469 179 176.183594 C 179 175.085938 175.398438 175.382812 161 177.476562 Z M 161 177.476562 "/>'+
        '</g>'+      
        '</svg>'+
        '<h1 id="dado1" class="centered">'+num+'</h1></div></a>'+
    '</div>';}
    function d12(nf,num){ return'<div class="text-center"><a href="#" '+nf+' style="color:inherit;"><div id="normal2">'+
        '<svg width="100%" height="100%" version="1.1" viewBox="0 0 52.917 60.59" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'+
        '<g stroke-opacity="0">'+
        '<path d="m17.82 53.262h17.163l4.7259-15.181-13.393-7.4731-13.233 7.7044z"/>'+
        '<path d="m11.884 38.243-10.664-10.991v7.6252l8.3957 14.054 7.2003 4.0176z"/>'+
        '<path d="m12.384 37.383-11.494-11.737 8.9454-14.338 16.042 3.7802-0.0054 14.566z"/>'+
        '<path d="m26.057 14.148-15.003-3.5195 6.8971-4.3196 16.615-0.12662 6.8523 4.3504z"/>'+
        '<path d="m26.643 29.866-0.02617-14.978 16.556-3.794 8.6793 14.407-11.788 11.961z"/>'+
        '<path d="m40.651 38.441 11.224-11.49v7.7033l-8.3342 13.951-7.0405 3.9285z"/>'+
        '<path d="m40.651 38.441 11.224-11.49v7.7033l-8.3342 13.951-7.0405 3.9285z"/>'+
        '</g>'+
        '</svg>'+
        '<h1 id="dado2" class="centered">'+num+'</h1></div></a></div>'+
        '</div>';}
function d10(nf,num){ return '<div class="text-center"><a href="#" '+nf+' style="color:inherit;"><div id="normal3">'+
                '<svg class="d10" width="100%" height="100%" version="1.1" viewBox="0 0 52.917 60.59" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'+
                '<g stroke-opacity="0">'+
                '<path d="m12.951 28.397 12.968 6.0046v21.81l-25.081-24.044z"/>'+
                '<path d="m39.591 28.429 11.949 3.9741-24.98 23.978 0.20593-22.004z"/>'+
                '<path d="m12.797 27.523 10.293-19.625-21.875 23.21z"/>'+
                '<path d="m26.286 33.381-12.543-5.8084 12.582-23.901 12.621 23.822z"/>'+
                '<path d="m39.91 27.455 11.347 4.0031-22.175-24.63z"/>'+
                '</g>'+
                '</svg>'+
                '<h1 id="dado3" class="centered">'+num+'</h1></div></a></div>';
}
function d8(nf,num){ return  '<div class="text-center"><a href="#" '+nf+' style="color:inherit;"><div id="normal4">'+
            '<svg width="100%" height="100%" version="1.1" viewBox="0 0 52.917 60.59" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'+    
            '<g stroke-opacity="0">'+
            '<path d="m26.109 41.082v12.417l-24.827-23.43z"/>'+
            '<path d="m50.873 30.707-23.501 22.735v-12.36z"/>'+
            '<path d="m1.5027 28.857 24.609 11.048v-33.813z"/>'+
            '<path d="m27.279 39.898v-33.812l24.181 23.197z"/>'+
            '</g>'+
            '</svg>'+
            '<h1 id="dado4" class="centered">'+num+'</h1></div></a></div>';}
function d6(nf,num){ return '<div class="text-center"><a href="#" '+nf+' style="color:inherit;"><div id="normal5">'+
            '<svg width="100%" height="100%" version="1.1" viewBox="0 0 52.917 60.59" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">'+
            '<g stroke-opacity="0">'+
                '<path d="m26.91 57.853v-27.094l25.313-13.665v27z"/>'+
                '<path d="m25.87 57.772v-26.896l-25.24-13.626v27.073z"/>'+
                '<path d="m26.275 29.773-25.056-13.527 25.176-13.591 25.25 13.632z"/>'+
            '</g>'+
            '</svg>'+
            '<h1 id="dado5" class="centered">'+num+'</h1></div></a></div>';}
            function d4(nf,num){ return '<div class="text-center"><a href="#" '+nf+' style="color:inherit;"><div id="normal6">'+
            '<svg width="100%" height="100%" version="1.1" viewBox="0 0 52.917 60.59" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xlink="http://www.w3.org/1999/xlink">'+
            '<g>'+
            '<path d="m26.831 60.566v-60.488l-26.815 37.057z"/>'+
            '<path d="m27.8 60.577 24.88-23.688-24.872-36.889z"/>'+
            '<path d="m25.903 59.815c-6.33e-4 -0.13106-0.10899-0.22367-0.94272-0.80529-0.16626-0.11599-0.50409-0.40947-0.75073-0.65219-0.76585-0.75367-0.7946-0.77863-0.89686-0.77863-0.05481 0-0.09965-0.05095-0.09965-0.11322 0-0.06227-0.06726-0.11322-0.14948-0.11322-0.08222 0-0.14948-0.07943-0.14948-0.17651 0-0.09709-0.03767-0.15006-0.08371-0.11773s-0.26852-0.14299-0.49441-0.38959c-0.22588-0.2466-0.45402-0.44837-0.50697-0.44837-0.05295 0-0.18445-0.12738-0.29224-0.28305-0.10778-0.15568-0.24556-0.28305-0.30619-0.28305-0.06062 0-0.19541-0.08917-0.29953-0.19814-0.6785-0.71014-0.87961-0.89797-1.033-0.96486-0.09502-0.04142-0.17277-0.12787-0.17277-0.1921 0-0.06423-0.06256-0.11677-0.13902-0.11677-0.07646 0-0.24462-0.12649-0.37369-0.28109-0.12907-0.1546-0.27027-0.28198-0.31376-0.28305-0.0435-0.0012-0.20045-0.13376-0.34878-0.29486-0.14833-0.1611-0.44907-0.42359-0.6683-0.58332-0.21923-0.15973-0.49736-0.41005-0.61806-0.55626-0.1207-0.14621-0.25648-0.26584-0.30172-0.26584-0.04524 0-0.15221-0.08916-0.2377-0.19814-0.22872-0.29154-0.67641-0.70761-0.76157-0.70777-0.04069-7.4e-5 -0.19482-0.11471-0.34252-0.25474-0.14769-0.14004-0.41002-0.37903-0.58294-0.5311-0.17292-0.15207-0.44921-0.41955-0.61396-0.59441-0.16475-0.17486-0.36207-0.31792-0.43849-0.31792-0.07641 0-0.13995-0.03822-0.14118-0.08492-0.0012-0.0467-0.22444-0.26324-0.49602-0.48119s-0.49479-0.43449-0.49602-0.48119c-0.0012-0.0467-0.05875-0.08492-0.12782-0.08492-0.06907 0-0.24648-0.12737-0.39426-0.28305s-0.2952-0.28305-0.32761-0.28305c-0.03242 0-0.16283-0.12738-0.28982-0.28305-0.12699-0.15568-0.26533-0.28306-0.30742-0.28306-0.04209 0-0.16027-0.10969-0.26261-0.24376-0.10234-0.13407-0.18608-0.2005-0.18608-0.14762 0 0.05288-0.14574-0.05674-0.32387-0.24361-0.17813-0.18686-0.51639-0.48553-0.75169-0.6637-0.2353-0.17818-0.45952-0.38192-0.49826-0.45277-0.038742-0.070849-0.29466-0.3044-0.5687-0.51902-0.27404-0.21461-0.52068-0.41685-0.54808-0.44943-0.027404-0.032575-0.18436-0.15523-0.34878-0.27257-0.16443-0.11734-0.33482-0.28175-0.37865-0.36535-0.04383-0.08361-0.14099-0.15201-0.21591-0.15201-0.074922 0-0.15117-0.03821-0.16944-0.08492-0.01827-0.0467-0.3886-0.39061-0.82295-0.76424-1.4688-1.2634-1.8974-1.6496-2.3564-2.1229-0.10569-0.10898-0.21527-0.19814-0.24351-0.19814-0.080421 0-1.4893-1.1732-1.5265-1.2712-0.018269-0.04812-0.093008-0.08748-0.16609-0.08748-0.073078 0-0.14782-0.04162-0.16609-0.09248-0.018269-0.050861-0.39196-0.39477-0.83043-0.76424-0.43847-0.36947-0.85327-0.73182-0.92178-0.80521-0.16752-0.17946-0.15712-0.43085 0.024913-0.6025 0.082213-0.07751 0.14948-0.21113 0.14948-0.29692 0-0.08578 0.050149-0.15597 0.11144-0.15597 0.13579 0 0.68196-0.68695 0.68418-0.86053 8.752e-4 -0.06852 0.13612-0.24173 0.30055-0.3849 0.16443-0.14317 0.29896-0.30579 0.29896-0.36138 0-0.10919 0.076417-0.22225 0.57223-0.84665 0.17771-0.22379 0.42434-0.5574 0.54808-0.74134 0.12374-0.18394 0.41557-0.57198 0.6485-0.86231 0.23294-0.29032 0.42352-0.56918 0.42352-0.6197 0-0.05052 0.044843-0.06035 0.099651-0.02186s0.099651-0.01106 0.099651-0.11009c0-0.09903 0.067265-0.20939 0.14948-0.24524 0.082213-0.03585 0.14948-0.11608 0.14948-0.17829 0-0.06222 0.10946-0.21094 0.24324-0.3305 0.13378-0.11956 0.26856-0.30803 0.29951-0.41882 0.053078-0.19 0.56419-0.89955 1.1762-1.6329 0.15072-0.1806 0.27404-0.36994 0.27404-0.42076 0-0.05082 0.067265-0.12172 0.14948-0.15757 0.082213-0.03585 0.14948-0.12531 0.14948-0.19881 0-0.0735 0.15206-0.30144 0.33792-0.50652 0.18586-0.20508 0.31291-0.40129 0.28235-0.43602-0.030567-0.03473-0.00325-0.06314 0.060685-0.06314 0.063944 0 0.11626-0.04556 0.11626-0.10124 0-0.05568 0.22372-0.37412 0.49715-0.70763 0.27343-0.33351 0.52309-0.69555 0.5548-0.80452 0.031707-0.10898 0.12454-0.19814 0.20629-0.19814 0.081753 0 0.12073-0.05131 0.08662-0.11402-0.034113-0.06271 0.00638-0.14384 0.089977-0.18029 0.0836-0.03645 0.17936-0.1642 0.21279-0.2839 0.033436-0.1197 0.10241-0.1884 0.15327-0.15269 0.050862 0.03571 0.092691-0.0017 0.092952-0.08328 2.9e-4 -0.08152 0.15493-0.33927 0.3437-0.57279 0.18877-0.23352 0.32309-0.42458 0.29848-0.42458-0.024609 0 0.03373-0.09054 0.12964-0.20121 0.09591-0.11066 0.33134-0.42394 0.52317-0.69617 0.19183-0.27223 0.42726-0.57513 0.52317-0.67311 0.09591-0.09799 0.17439-0.23955 0.17439-0.3146 0-0.07505 0.11211-0.23664 0.24913-0.3591 0.13702-0.12246 0.24913-0.26654 0.24913-0.32019 0-0.05364 0.16816-0.30297 0.37369-0.55404 0.20553-0.25108 0.46338-0.60036 0.573-0.77617 0.10962-0.17582 0.25536-0.38681 0.32387-0.46887 0.06851-0.08205 0.12456-0.20679 0.12456-0.27719 0-0.07039 0.04484-0.0965 0.09965-0.05801s0.09965 0.02638 0.09965-0.0269c0-0.11709 0.20958-0.42243 0.7723-1.1251 0.23294-0.29089 0.42352-0.56533 0.42352-0.60987 0-0.08388 0.50748-0.76056 1.0713-1.4284 0.17813-0.21102 0.32387-0.42156 0.32387-0.46788 0-0.04632 0.12964-0.24548 0.28809-0.44258 0.15845-0.1971 0.26414-0.38558 0.23487-0.41884-0.02927-0.03326 0.02046-0.0926 0.11052-0.13186 0.09006-0.03927 0.16374-0.14236 0.16374-0.22911 0-0.08675 0.04625-0.15772 0.10278-0.15772 0.05653 0 0.13072-0.08271 0.16486-0.1838 0.03414-0.10109 0.18969-0.33212 0.34565-0.5134 0.15597-0.18128 0.28357-0.36743 0.28357-0.41368 0-0.04625 0.12332-0.23904 0.27404-0.42842 0.15072-0.18938 0.43099-0.56624 0.62282-0.83747 0.19183-0.27122 0.42012-0.57344 0.50731-0.67158 0.08719-0.09815 0.34846-0.4745 0.58061-0.83634s0.48592-0.68573 0.56395-0.71974c0.07802-0.034018 0.14207-0.12009 0.14233-0.19126 2.9e-4 -0.071177 0.12516-0.28226 0.27756-0.46908s0.41004-0.54346 0.57254-0.79255c0.16249-0.24909 0.3515-0.52021 0.42001-0.6025 0.06851-0.082288 0.12456-0.19692 0.12456-0.25475 0-0.057823 0.06726-0.10513 0.14948-0.10513 0.08447 0 0.14948-0.10138 0.14948-0.23312 0-0.12822 0.04484-0.20164 0.09965-0.16315 0.05481 0.038487 0.09986 0.00328 0.10011-0.078233 2.89e-4 -0.081514 0.13478-0.31103 0.29896-0.51004 0.16417-0.19901 0.29849-0.40364 0.29849-0.45473 0-0.051098 0.22422-0.37146 0.49826-0.71192 0.27404-0.34046 0.49826-0.64581 0.49826-0.67857s0.22266-0.33185 0.4948-0.66466c0.27214-0.33281 0.48515-0.63969 0.47335-0.68196-0.02795-0.10012 0.5991-0.79848 0.65744-0.7322 0.02451 0.027843 0.07458-0.085276 0.11127-0.25138 0.03669-0.1661 0.13176-0.37591 0.21127-0.46624 0.12631-0.14351 0.14456 3.5743 0.14456 29.451 0 16.288-0.02242 29.615-0.04983 29.615s-0.05011-0.06368-0.05045-0.14153z"/>'+
            '<path d="m27.8 60.577 24.88-23.688-24.872-36.889z"/>'+
            '</g>'+
            '</svg>'+
            '<h1 id="dado6" class="centered">'+num+'</h1></div></a></div>';}


function roll(n,face) {
    var alice = "alice"+ n;
    tp = "22%";
    var idd = "normal" +n;
    var idDado= "dado" +n;
        if(n > 3){
            n = n-3;
            tp = "55%"
        }
    var lado = (parseInt(n)-1)*20 +15;
    document.getElementById(idd).id = alice;
    document.getElementById(idDado).innerHTML = "";
    var dice = document.getElementById(alice);
    dice.addEventListener("animationend", () =>{
        var dado = Math.floor(Math.random()*parseInt(face))+1;
        document.getElementById(idDado).innerHTML = dado;
        document.getElementById(alice).id = idd;
        tp = '0';
    }
    
    )
}
function moneyComplet(id){
  money();
  save(IDC,id,'17');
}

function money(){
  var dinheiroEl = document.getElementById("dinheiro");
  var Dinheiro= dinheiroEl.innerHTML;
  var atualizacaoEl = document.getElementById("atualizacao").value;
  var d = parseInt(Dinheiro) + parseInt(atualizacaoEl);
  dinheiroEl.innerHTML = d;
}

function save(IDC,id,key){
    var value = ''; 
    
    if((key == "19" || key == "20") || key == "17" ){
        value = document.getElementById(id).innerHTML}
    else{
        value = document.getElementById(id).value;
    }
    if(value != 'NaN'){
    ajaxAtt(value,key,IDC);}
}
var lock = 0;
function block(){
    var blo = document.getElementById('lock');
    if(blo.className == 'fas fa-unlock'){
        blo.className = 'fas fa-lock';
        document.getElementById("Idade").disabled = true;
        document.getElementById("Aparencia").disabled = true;
        document.getElementById("EstilodeLuta").disabled = true;
        document.getElementById("classe").disabled = true;
        document.getElementById("raca").disabled = true;
        document.getElementById("Fruta").disabled = true;
        lock = 1;
    
    }else{
        blo.className = 'fas fa-unlock'
        document.getElementById("Idade").disabled = false;
        document.getElementById("Aparencia").disabled = false;
        document.getElementById("EstilodeLuta").disabled = false;
        document.getElementById("classe").disabled = false;
        document.getElementById("raca").disabled = false;
        document.getElementById("Fruta").disabled = false;
        lock = 0;
    }

}
function Status(idStatus,idName){
    var b = idName.id;
    var numSta= idStatus.id;
    var peri = document.getElementById(numSta).value;
    var modificador = (parseInt(peri) -10)/2;
    if(modificador % 1 !== 0){modificador = modificador -0.5}
    document.getElementById(b).innerHTML = modificador; 
}

function abaclose(){
    var Aba = document.getElementById("Aba");
    Aba.style.height = "none";
    Aba.style.width = "none";
    Aba.style.background = "none";
    Aba.style.display ="none";
    Aba.innerHTML = "none";
    Aba.style.top = "15%";
    Aba.style.left = "14%";
}
function barvida()
{
    var barrainfec=document.getElementById("barrainfec");
    var infeccao_atual= document.getElementById("infec").value;

    var barravida=document.getElementById("vida");
    var vida_atual= document.getElementById("vidaatual").value;
    var vida_max= document.getElementById("vidamax").value;
    var width_inf= parseFloat(infeccao_atual)/20;
    width_inf = width_inf*100;

    var barraestamina =document.getElementById("estamina");
    var estamina_atual= document.getElementById("estaminaatual").value;
    var estamina_max= document.getElementById("estaminamax").value;
    var width_estamina = parseFloat(estamina_atual)/parseFloat(estamina_max);
    width_estamina = width_estamina*100;
  

    var width = parseFloat(vida_atual)/parseFloat(vida_max);
    width = width*100;

    barravida.style.width = width +"%";
    barravida.innerHTML = width +"%";

    barrainfec.style.width= width_inf +"%";
    barrainfec.innerHTML = width_inf +"%";

    barraestamina.style.width= width_estamina +"%";
    barraestamina.innerHTML = width_estamina +"%";


    setInterval("barvida();",100);
}

function addhabonlist(IDC,array){
    if(document.getElementById("Truque")){  
        var v = document.getElementById("TList");
        var l = document.createElement("div")
        l.innerHTML = '<a class="list-group-item list-group-item-action list-group-item-secondary" id= "'+array[0]+'" style = "font-size:1em; width:80%" onclick = "rolarhabilidade('+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+')">'+array[0]+'</a> '
        +'<button type="button" class="btn btn-outline-secondary" onclick="Info(\''+array[0]+'\',\''+array[8]+'\',\''+array[1]+'\','+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+');"><i class="fas fa-info"></i></button><button type="button" class="btn btn-outline-warning"><i class="fas fa-pencil-alt" style="color:rgb(255, 255, 255)"onclick="Edit(\''+array[0]+'\',\''+array[8]+'\',\''+array[1]+'\','+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+');"></i></button>'; 
        l.setAttribute("class","input-group")
        v.appendChild(l);
        abaclose();
    }
    
    if(document.getElementById("GolpesEspeciais")){
        var v = document.getElementById("GList");
        var l = document.createElement("div")
        l.innerHTML = '<a class="list-group-item list-group-item-action list-group-item-secondary" id= "'+array[0]+'" style = "font-size:1em; width:80%" onclick = "rolarhabilidade('+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+')">'+array[0]+'</a> '
        +'<button type="button" class="btn btn-outline-secondary" onclick="Info(\''+array[0]+'\',\''+array[8]+'\',\''+array[1]+'\','+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+');"><i class="fas fa-info"></i></button><button type="button" class="btn btn-outline-warning"><i class="fas fa-pencil-alt" style="color:rgb(255, 255, 255)"onclick="Edit(\''+array[0]+'\',\''+array[8]+'\',\''+array[1]+'\','+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+');"></i></button>'; 
        l.setAttribute("class","input-group")
        v.appendChild(l);
        abaclose();
    }
    
    if(document.getElementById("SuperMovimentos")){
        var v = document.getElementById("SList");
        var l = document.createElement("div")
        l.innerHTML = '<a class="list-group-item list-group-item-action list-group-item-secondary" id= "'+array[0]+'" style = "font-size:1em; width:80%" onclick = "rolarhabilidade('+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+')">'+array[0]+'</a> '
        +'<button type="button" class="btn btn-outline-secondary" onclick="Info(\''+array[0]+'\',\''+array[8]+'\',\''+array[1]+'\','+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+');"><i class="fas fa-info"></i></button><button type="button" class="btn btn-outline-warning"><i class="fas fa-pencil-alt" style="color:rgb(255, 255, 255)"onclick="Edit(\''+array[0]+'\',\''+array[8]+'\',\''+array[1]+'\','+array[2]+','+array[3]+','+array[4]+','+array[5]+','+array[6]+','+array[7]+');"></i></button>'; 
        l.setAttribute("class","input-group")
        v.appendChild(l);
        abaclose();
    }


}

function proporcoes(esquerda,top,largura,altura,nid){
    let variavel = "#normal"+nid;
    let cssListaRegra = [...document.styleSheets[2].cssRules].filter(rule => rule.selectorText == variavel);
    for(let cssRule of cssListaRegra){
        cssRule.style.setProperty("left",esquerda);
        cssRule.style.setProperty("top",top);
        cssRule.style.setProperty("width",largura);
        cssRule.style.setProperty("height",altura);
    }
    let variavel2 = "#alice"+nid;
    let cssListaRegra2 = [...document.styleSheets[2].cssRules].filter(rule => rule.selectorText == variavel2);
    for(let cssRule of cssListaRegra2){
        cssRule.style.setProperty("left",esquerda);
        cssRule.style.setProperty("top",top);
        cssRule.style.setProperty("width",largura);
        cssRule.style.setProperty("height",altura);
    }    
}


function rodaPeri(StatusParaSomar){
    var modificador = document.getElementById(StatusParaSomar.id).innerHTML;
    newAba('30%','30%','black','2');
    var dice = document.getElementById("alice1");
    dice.addEventListener("animationend", () =>{
        var NumeroDado = document.getElementById("dado1").innerHTML;
        var total = parseInt(NumeroDado) + parseInt(modificador);
        document.getElementById("totalDado").innerHTML = "total Dado:"+total;   
    })

}

function HabilidadeNova(event,identidade){
       
    var texto = document.getElementById(identidade.id).innerHTML;
    
    if(event.button == 0){
        texto = parseInt(texto) +1;
        document.getElementById(identidade.id).innerHTML = texto;
    }else{
        if(event.button == 2){
            texto = parseInt(texto) - 1;
            if(texto >-1){document.getElementById(identidade.id).innerHTML = texto};
        }
    }
}

function send(){
    var name = document.getElementById("nameHabi").value;
    var explicacao = document.getElementById("textHab").value;
    var dice ="";

    var d20 = document.getElementById("dado1").innerHTML;
    var d12 = document.getElementById("dado2").innerHTML;
    var d10 = document.getElementById("dado3").innerHTML;
    var d8 = document.getElementById("dado4").innerHTML;
    var d6 = document.getElementById("dado5").innerHTML;
    var d4 = document.getElementById("dado6").innerHTML;

    explicacao = explicacao.replace(/(\r\n|\n|\r)/gm, "|/|");

    var listahab = [name,explicacao,d20,d12,d10,d8,d6,d4,'',playerC,personagemC];

    if(document.getElementById("Truque")){
        listahab[8]= "truques";
        addhabonlist(IDC,listahab);
    }
    
    if(document.getElementById("GolpesEspeciais")){
        listahab[8]= 'GolpesEspeciais';

    }
    
    if(document.getElementById("SuperMovimentos")){
        listahab[8]= 'SuperMovimentos';
    }
}
function Info(a,b,c,d,e,f,g,h,i){
    c = c.replaceAll("|/|","</br>");
    listahab = [a,b,c,d,e,f,g,h,i];
    newAba('90%','80%','#b8c6db','6')
    document.getElementById("Nomehab").innerHTML = listahab[0];
    document.getElementById("info").innerHTML = listahab[2];
    document.getElementById("dado1").innerHTML = listahab[3];
    document.getElementById("dado2").innerHTML = listahab[4];
    document.getElementById("dado3").innerHTML = listahab[5];
    document.getElementById("dado4").innerHTML = listahab[6];
    document.getElementById("dado5").innerHTML = listahab[7];
    document.getElementById("dado6").innerHTML = listahab[8];
}
function Edit(a,b,c,d,e,f,g,h,i){
    c = c.replaceAll("|/|"," ");
    listahab = [a,b,c,d,e,f,g,h,i];
    if(listahab[1] == "truques"){
        newAba('90%','80%','#b8c6db','3');
        document.getElementById("nameHabi").value = listahab[0];
        document.getElementById("textHab").value = listahab[2];    
        document.getElementById("dado1").innerHTML = listahab[3];
        document.getElementById("dado2").innerHTML = listahab[4];
        document.getElementById("dado3").innerHTML = listahab[5];
        document.getElementById("dado4").innerHTML = listahab[6];
        document.getElementById("dado5").innerHTML = listahab[7];
        document.getElementById("dado6").innerHTML = listahab[8];
    }
    if(listahab[1] == "GolpesEspeciais"){
        newAba('90%','80%','#b8c6db','4');
        document.getElementById("nameHabi").value = listahab[0];
        document.getElementById("textHab").value = listahab[2];    
        document.getElementById("dado1").innerHTML = listahab[3];
        document.getElementById("dado2").innerHTML = listahab[4];
        document.getElementById("dado3").innerHTML = listahab[5];
        document.getElementById("dado4").innerHTML = listahab[6];
        document.getElementById("dado5").innerHTML = listahab[7];
        document.getElementById("dado6").innerHTML = listahab[8];
    }
    if(listahab[1] == "SuperMovimentos"){
        newAba('90%','80%','#b8c6db','5');
        document.getElementById("nameHabi").value = listahab[0];
        document.getElementById("textHab").value = listahab[2];    
        document.getElementById("dado1").innerHTML = listahab[3];
        document.getElementById("dado2").innerHTML = listahab[4];
        document.getElementById("dado3").innerHTML = listahab[5];
        document.getElementById("dado4").innerHTML = listahab[6];
        document.getElementById("dado5").innerHTML = listahab[7];
        document.getElementById("dado6").innerHTML = listahab[8];
    }


}

function rodarhab(idd){
    newAba('30%','30%','black','2')
    var dice = document.getElementById("alice1");
    var numperi = document.getElementById(idd.id).innerHTML;
    console.log(numperi);
    dice.addEventListener("animationend", () =>{
        var NumeroDado = document.getElementById("dado1").innerHTML;
        var total = parseInt(NumeroDado) + parseInt(numperi);
        console.log(NumeroDado);
        document.getElementById("totalDado").innerHTML = "total Dado: "+total;   
    })

}

function rolarhabilidade(d20,d12,d10,d8,d6,d4){
    
    newAba('70%','50%','black','2');
    proporcoes('15%','15%','65%','65%','1');
    var dice = document.getElementById("alice1");
    dice.addEventListener("animationend", () =>{
        var v = document.createElement("div");
        var botao = "<div><button type='button' class='btn btn-success butaltura'>Consegui</button><button type='button' class='btn btn-danger butaltura'>Falhei</button></div>";
        var d = document.getElementById("Aba");
        console.log(v);
        console.log(d);
        console.log(botao);
        v.innerHTML = botao;
        d.appendChild(v);
    })

}





function showPreviewOne(event){
    if(event.target.files.length > 0){
      let src = URL.createObjectURL(event.target.files[0]);
      let preview = document.getElementById("imag");
      preview.src = src;
    } 
  }
function newAba(altura,largura,fundo,n){ 
    var Aba = document.getElementById("Aba");
    Aba.style.height = altura;
    Aba.style.width = largura;
    Aba.style.background = fundo;
    Aba.style.display ="block";
    if(n == 1){
        Aba.innerHTML='<button onclick="abaclose()" class="btn btn-dark X"><i class="fas fa-times-circle" style="color:white; font-size: large;"></i></button> <h2 class="center">Dados</h2>'+
        '<div class="container">'+d20('onclick="roll(1,20)"','20')+d12('onclick="roll(2,12)"','12')+d10('onclick="roll(3,10)"','10')+d8('onclick="roll(4,8)"','8')+d6('onclick="roll(5,6)"','6')+d4('onclick="roll(6,4)"','4');
        proporcoes('5%','15%','30%','32%','1');
        proporcoes('37%','15%','30%','32%','2');
        proporcoes('68%','15%','30%','32%','3');                  
        proporcoes('5%','50%','30%','32%','4');   
        proporcoes('37%','50%','30%','32%','5');
        proporcoes('68%','50%','30%','32%','6');
    }  
    if(n == 2){
        Aba.innerHTML = '<button onclick="abaclose()" class="btn btn-dark X"><i class="fas fa-times-circle" style="color:white; font-size: large;"></i></button>'+
        '<h1 id="totalDado"style="color:white; margin: 2%;">Valor Total:</h1>'+d20('','20');
        proporcoes('15%','15%','80%','80%','1');
        roll(1,20);
        document.getElementById("Aba").style.left = "25%"
        document.getElementById("Aba").style.top = "25%"
    }
    if(n == 3){
        Aba.innerHTML = '<div id="opcao-dado"><div><div id="Truque"><button onclick="abaclose()" class="btn btn-dark X"><i class="fas fa-times-circle" style="color:white; font-size: large;"></i>'+
                        '</button></div> <div class="input-group d-flex justify-content-between habExplain"><span class="input-group-text">Nome Da habilidade</span><input id="nameHabi"type="text" class="form-control"></div>'+
                        '<div class="habExplain"><p style="font-size: 25px;margin: 0;">Explicação da habilidade:</p><textarea id="textHab"class="hb"rows="8"></textarea><h1>Favor informar os dados de dano:</h1>'
                        +d20('onmousedown="HabilidadeNova(event,dado1)"','0')+d12('onmousedown="HabilidadeNova(event,dado2)"','0')+d10('onmousedown="HabilidadeNova(event,dado3)"','0')+
                        d8('onmousedown="HabilidadeNova(event,dado4)"','0')+d6('onmousedown="HabilidadeNova(event,dado5)"','0')+d4('onmousedown="HabilidadeNova(event,dado6)"','0')+'<button class="btn btn-primary" id="ok" onclick="send()"><i class="far fa-check-square"></i></button></div></div></div>';
        proporcoes('5%','','16%','17%','1');
        proporcoes('20%','','16%','17%','2');
        proporcoes('35%','','16%','17%','3');                  
        proporcoes('50%','','16%','17%','4');   
        proporcoes('65%','','16%','17%','5');
        proporcoes('80%','','16%','17%','6');
        document.getElementById("Aba").style.top = "8%";
    }
    if(n == 4){
        Aba.innerHTML = '<div id="opcao-dado"><div><div id="GolpesEspeciais"><button onclick="abaclose()" class="btn btn-dark X"><i class="fas fa-times-circle" style="color:white; font-size: large;"></i>'+
                        '</button></div> <div class="input-group d-flex justify-content-between habExplain"><span class="input-group-text">Nome Da habilidade</span><input id="nameHabi"type="text" class="form-control"></div>'+
                        '<div class="habExplain"><p style="font-size: 25px;margin: 0;">Explicação da habilidade:</p><textarea id="textHab"class="hb"rows="8"></textarea><h1>Favor informar os dados de dano:</h1>'
                        +d20('onmousedown="HabilidadeNova(event,dado1)"','0')+d12('onmousedown="HabilidadeNova(event,dado2)"','0')+d10('onmousedown="HabilidadeNova(event,dado3)"','0')+
                        d8('onmousedown="HabilidadeNova(event,dado4)"','0')+d6('onmousedown="HabilidadeNova(event,dado5)"','0')+d4('onmousedown="HabilidadeNova(event,dado6)"','0')+'<button class="btn btn-primary" id="ok" onclick="send()"><i class="far fa-check-square"></i></button></div></div></div>';
        proporcoes('5%','','16%','17%','1');
        proporcoes('20%','','16%','17%','2');
        proporcoes('35%','','16%','17%','3');                  
        proporcoes('50%','','16%','17%','4');   
        proporcoes('65%','','16%','17%','5');
        proporcoes('80%','','16%','17%','6');
        document.getElementById("Aba").style.top = "8%";
    }
    if(n == 5){
        Aba.innerHTML = '<div id="opcao-dado"><div><div id="SuperMovimentos"><button onclick="abaclose()" class="btn btn-dark X"><i class="fas fa-times-circle" style="color:white; font-size: large;"></i>'+
                        '</button></div> <div class="input-group d-flex justify-content-between habExplain"><span class="input-group-text">Nome Da habilidade</span><input id="nameHabi"type="text" class="form-control"></div>'+
                        '<div class="habExplain"><p style="font-size: 25px;margin: 0;">Explicação da habilidade:</p><textarea id="textHab"class="hb"rows="8"></textarea><h1>Favor informar os dados de dano:</h1>'
                        +d20('onmousedown="HabilidadeNova(event,dado1)"','0')+d12('onmousedown="HabilidadeNova(event,dado2)"','0')+d10('onmousedown="HabilidadeNova(event,dado3)"','0')+
                        d8('onmousedown="HabilidadeNova(event,dado4)"','0')+d6('onmousedown="HabilidadeNova(event,dado5)"','0')+d4('onmousedown="HabilidadeNova(event,dado6)"','0')+'<button class="btn btn-primary" id="ok" onclick="send()"><i class="far fa-check-square"></i></button></div></div></div>';
        proporcoes('5%','','16%','17%','1');
        proporcoes('20%','','16%','17%','2');
        proporcoes('35%','','16%','17%','3');                  
        proporcoes('50%','','16%','17%','4');   
        proporcoes('65%','','16%','17%','5');
        proporcoes('80%','','16%','17%','6');
        document.getElementById("Aba").style.top = "8%";
    }
    if(n == 6){
        Aba.innerHTML = '<div id="opcao-dado"><div><button onclick="abaclose()" class="btn btn-dark X"><i class="fas fa-times-circle" style="color:white; font-size: large;"></i></button></div><h1 id="Nomehab"></h1><p id="info">.</p>'+d20('','0')+d12('','0')+d10('','0')+
        d8('','0')+d6('','0')+d4('','0')+'</div>';
        proporcoes('5%','','16%','17%','1');
        proporcoes('20%','','16%','17%','2');
        proporcoes('35%','','16%','17%','3');                  
        proporcoes('50%','','16%','17%','4');   
        proporcoes('65%','','16%','17%','5');
        proporcoes('80%','','16%','17%','6');
        document.getElementById("Aba").style.top = "8%";
    }
}
function trocapericia(IDC,value,key){
    if(lock != 1)
    {
      var vl = document.getElementById(value);
      var newValue = prompt("Por favor insira novo valor:");
      if (newValue != null)
      {
      vl.innerHTML = newValue;   
      save(IDC,value,key);
      }
    }
  }



  function twoFunc(IDC,idStatus,idName,key)
{
  var b=idStatus;  
  var d = idStatus.id;
  var c=idName;
  save(IDC,d,key);
  Status(b,c);
}