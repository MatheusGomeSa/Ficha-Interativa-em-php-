<!DOCTYPE html> 
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, inicial-scale=1.0">
        <script src='https://kit.fontawesome.com/a076d05399.js'></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet" href="main.css">
    </head>    
    <body onload="barvida();">
    <div class="container">
        <div class="row margin">
            <div class="col-md-12 ">
        <div class="container-fluid">
            <div class="row margin">
                <div class="col-md-4 text-center">
                    <div class="b">
                    <a onclick="trocapericia(IDC,'name','19')" href="#" class="efeito"><h1 id="name">Nome Personagem</h1></a></div>
                    </div>
                <div class="col-6"><div class="b"></div></div>
                <div class="col-md-2 text-right">
                    <div class="b">
                    <button onclick="newAba('80%','80%','rgb(182, 182, 182)','1')" class="btn btn-dark"><i class='fas fa-dice-d20' style='color:white'></i></button>
                    <button onclick="block()" class="btn btn-dark"><i id='lock' class="fas fa-unlock" style='color:white'></i></button>
                    </div>
                </div> 
            </div>
        </div>
        <div class="container-fluid">  
            <div class="row margin">
                <div class="col-md-4 text-center">
                    <div class="b">
                        <div class="form-input">
                            <label for="fileid" style="cursor: pointer;"><img id="imag" src="rpg/personagem.jpeg"  class="rounded-sm border border-success rounded-circle rounded" style="max-width:60%;max-height:60%;align-items: center center;">
                            <input id="fileid"type="file"  accept="image/*" onchange="showPreviewOne(event);" style="display:none"></label>
                         </div>
                         <h5><a onclick="trocapericia(IDC,'player','20')"href="#"><span id="player" class="badge rounded-pill bg-secondary">Player</span></a></h5>
                    </div>
                </div>
                <div class="col-md-3 align-self-center">   
                    <div class="b">
                        <div class="input-group ">
                                <label class="input-group-text info" for="Idade">Idade:</label>
                                <input class="form-control escolha" type="number" id="Idade" onchange='save(IDC,"Idade",0)'>
                        </div>
            
                        <div class="input-group">
                                <label class="input-group-text info" for="Aparencia">Aparencia:</label>
                                <input class="form-control escolha" type="number" id="Aparencia" onchange='save(IDC,"Aparencia",1)'>
                        </div>
            
                        <div class="input-group">
                                <label class="input-group-text info" for="Fruta">Fruta:</label>
                                <input class="form-control escolha"type="text" id="Fruta" onchange='save(IDC,"Fruta",2)'>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 align-self-center">     
                    <div class="b">                    
                        <div class="input-group">
                                <label class="input-group-text info" for="raca">Raça: </label>
                                <select class="form-select escolha" id="raca" onchange='save(IDC,"raca",3)'>
                                    <option value="Humano">Humano</option>
                                    <option value="LongArms">Long Arms</option>
                                    <option value="LongLegs">Long Legs</option>
                                    <option value="MeioGigante">Meio Gigante</option>
                                    <option value="Kumates">Kumates</option>
                                    <option value="Tritões">Tritões</option>
                                    <option value="Sereias">Sereias</option>
                                </select>
                        </div>
            
                        <div class="input-group">
                                <label class="input-group-text info" for="classe">Classe: </label>
                                <select class="form-select escolha" name="classe" id="classe" onchange="save(IDC,'classe','4')">
                                    <option value="Capitão">Capitão</option>
                                    <option value="Navegador">Navegador</option>
                                    <option value="Atirador">Atirador</option>
                                    <option value="Cozinheiro">Cozinheiro</option>
                                    <option value="Médico">Médico</option>
                                    <option value="Espadachim">Espadachim</option>
                                    <option value="Músico">Músico</option>
                                    <option value="Arqueólogo">Arqueólogo</option>
                                    <option value="Lutador">Lutador</option>
                                    <option value="Gatuno">Gatuno</option>
                                </select>
                        </div>
            
                        <div class="input-group">
                                <label class="input-group-text info" for="EstilodeLuta">Estilo de Luta: </label>
                                <select class="form-select escolha" name="EstilodeLuta" id="EstilodeLuta" onchange="save(IDC,'EstilodeLuta','5')">
                                <option value="Punch style">Punch style</option>
                                <option value="Snyper style">Snyper style</option>
                                <option value="Black leg style">Black leg style</option>
                                <option value="Ningyo gujutsu">Ningyo gujutsu</option>
                                <option value="Gyunjin karate">Gyunjin karate</option>
                                <option value="Arsenal style">Arsenal style</option>
                                <option value="Clima tact">Clima tact</option>
                                <option value="Ittoryuu">Ittoryuu</option>
                                <option value="Nitoryuu">Nitoryuu</option>
                                <option value="Santoryuu">Santoryuu</option>
                                <option value="Yontoryuu">Yontoryuu</option>
                                <option value="Rokutoryuu">Rokutoryuu</option>
                                <option value="Hachitoryuu">Hachitoryuu</option>
                                </select>
                        </div>
                    </div>
                </div>
        </div>    




    <div class="container-fluid">    
        <div class="row margin">
            <div class="col-md-4 ">
                <div class="b">
            <section>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-warning status" style="text-align:center">Status</li>

                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        <Button onclick="rodaPeri(btnforcaa)" id="btnforcaa"class="btn btn-dark" style="align-items: flex-end;" >1</Button>
                        <label for="forcaa">Força</label>
                        <input onchange= "twoFunc(IDC,forcaa,btnforcaa,'6');" type="number" id="forcaa" class="stat">
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        <Button onclick="rodaPeri(btndestrezaa)" id="btndestrezaa" class="btn btn-dark" style="align-items: flex-end;" >1</Button>
                        <label for="destrezaa" >Destreza</label>
                        <input onchange="twoFunc(IDC,destrezaa,btndestrezaa,'7')" type="number" id="destrezaa" class="stat">
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        <Button onclick="rodaPeri(btnconstituicaoo)" id="btnconstituicaoo" class="btn btn-dark" style="align-items: flex-end;" >1</Button>
                        <label for="constituicaoo">Constituição</label>
                        <input onchange="twoFunc(IDC,constituicaoo,btnconstituicaoo,'8')" type="number" id="constituicaoo"class="stat">
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        <Button onclick="rodaPeri(btninteligenciaa)" id="btninteligenciaa" class="btn btn-dark" style="align-items: flex-end;" >1</Button>
                        <label for="inteligenciaa">Inteligência</label>
                        <input onchange="twoFunc(IDC,inteligenciaa,btninteligenciaa,'9')" type="number" id="inteligenciaa"class="stat">
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        <Button onclick="rodaPeri(btnsabedoriaa)" id="btnsabedoriaa"class="btn btn-dark" style="align-items: flex-end;" >1</Button>
                        <label for="sabedoriaa" >Sabedoria</label>
                        <input onchange="twoFunc(IDC,sabedoriaa,btnsabedoriaa,'10')" type="number" id="sabedoriaa" class="stat">
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        <Button onclick="rodaPeri(btncarismaa)" id="btncarismaa"class="btn btn-dark" style="align-items: flex-end;" >1</Button>
                        <label for="carismaa">Carisma</label>
                        <input onchange="twoFunc(IDC,carismaa,btncarismaa,'11')" type="number" id="carismaa" class="stat">
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-dark">
                        <Button onclick="rodaPeri(btnhakii)" id="btnhakii"class="btn btn-dark" style="align-items: flex-end;" >1</Button>
                        <label for="hakii">Haki</label>
                        <input onchange="save(IDC,'hakii','12')"type="number" id="hakii" class="stat">
                    </li>
                  </ul>
                </section>
                </div>
            </div>
            <div class="col-md-4 align-self-center">
                <section>
                    <div class="b">  
                    <div class="input-group input-group-lg" style="margin:4px;">
                          <span class="input-group-text list-group-item-danger" style="font-size:22px;font-weight: bold;">Vida</span>
                        <input id="vidaatual" value="10" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                        style="font-size:22px;font-weight: bold;" placeholder="" onchange="save(IDC,'vidaatual','14')"> 
                        <input id="vidamax" value="10" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                        style="font-size:22px;font-weight: bold;" placeholder="Máx" onchange="save(IDC,'vidamax','13')">
                    </div>
                    
                      
                    <div class="progress">
                        <div id="vida" class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>

                      <div class="input-group input-group-lg" style="margin:4px;">
                        <span class="input-group-text list-group-item-warning" style="font-size:22px;font-weight: bold;">Estâmina</span>
                      <input id="estaminaatual" value="10" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                      style="font-size:22px;font-weight: bold;" placeholder=""> 
                      <input id="estaminamax" value="10" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                      style="font-size:22px;font-weight: bold;" placeholder="Máx">
                  </div>
                  
                    
                  <div class="progress">
                      <div id="estamina" class="progress-bar bg-warning" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                      
                        <div class="input-group input-group-lg" style="margin:4px;">
                              <span class="input-group-text list-group-item-success" style="font-size:22px;font-weight: bold;">Infecção</span>
                            <input id="infec" value="2" type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" 
                            style="font-size:22px;font-weight: bold;" placeholder=""onchange="save(IDC,'infec','15')">
                        </div>
                            <div class="progress">
                        <div id="barrainfec"class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    <h3 class="text-left">Nivel de Procurado:</h3>
                    <h3 class="text-left">Nivel:</h3>
                    </div>
                </section>
            </div>
       
             <div class="col-md-4 align-self-center">
                <div class="b">
                <div class="form-group">
                    <label for="exampleFormControlTextarea1" style="font-size:22px;font-weight: bold;">História do Personagem </label>
                    <textarea onchange="save(IDC,'Lore','16')" class="form-control" id="Lore" rows="3"></textarea>
                  </div>
                  </div>
                </div>

        </div>

    </div>
    <div class="container-fluid">
        <div class="row margin">

            <div class="col-md-4 align-self-center">
                <div class="b">
                <p style="font-size:22px;font-weight: bold;">Berries</p>
                <div class="input-group mb-3">
                        <span class="input-group-text bg-dark" style="color:white;">฿</span>
                        <input onchange="moneyComplet('dinheiro')"value=0 id="atualizacao" type="number" class="form-control" aria-label="Amount (to the nearest dollar)">    
                        <span class="input-group-text" style="width: 30%; font-size: 100%;" id="dinheiro">100</span>
                    </div>
                    
                    <div class="input-group-append">
                      
                    </div>
                  </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1" style="font-size:22px;font-weight: bold;">Inventário</label>
                    <textarea onchange="save(IDC,'Inventario',18)" class="form-control" id="Inventario" rows="3"></textarea>
                  </div>
                </div>

            
            <div class="col-md-4 align-self-center">
                <div class="b">
                    <p style="font-size:22px;font-weight: bold;">Truques</p>
                    <div id="TList"class="list-group">
                    </div>  
                    <button onclick="newAba('90%','80%','#b8c6db','3')" type="button" class="btn btn-dark">+</button>
    
    
                    <p style="font-size:22px;font-weight: bold;">Golpes Especiais</p>
                    <div id="GList"class="list-group">
                    </div>
                    <button onclick="newAba('90%','80%','#b8c6db','4')" type="button" class="btn btn-dark">+</button>
    
                    <p style="font-size:22px;font-weight: bold;">Super Movimentos</p>
                    <div id="SList"class="list-group">
                    </div>
                    <button onclick="newAba('90%','80%','#b8c6db','5')" type="button" class="btn btn-dark">+</button>
                </div>
                <div id="Aba" class="base fluid-container">
                </div>
            </div>
            <div class="col-md-4 align-self-center">
                <div class="b">
                <div class="form-group">
                    <label for="exampleFormControlTextarea1" style="font-size:22px;font-weight: bold;">Anotações</label>
                    <textarea onchange="save(IDC,'Lore','16')" class="form-control" id="Lore" rows="3"></textarea>
                  </div>
                  </div>
                </div>

        </div> 
    </div>            
            
        </div>
    </div>
       <div id="Aba" class="base fluid-container">
        </div>


            </div>
        </div>
    </div>
    </body>

    <?php
            include_once($_SERVER['DOCUMENT_ROOT']."/config.php");
            include_once($_SERVER['DOCUMENT_ROOT']."/db.php");
            $ID = $_COOKIE['ID'];
            $player = $_COOKIE['Player'];
            $personagem = $_COOKIE['Personagem'];
            pegarinfo($player,$personagem,$ID);

            echo "<script>const IDC = '".$ID."';";
            echo "var playerC = '".$player."';";
            echo "var personagemC = '".$personagem."';</script>";
    ?>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script type="text/javascript" src="home3.js"></script>
    <script>Atualizar(personagemC,playerC,IdadeDB,AparenciaDB,EstilodeLutaDB,ClasszDB,RaçaDB,FrutaDB,VidaAtualDB,VidaMaxDB,IfecçãoDB,StatusForçaDB,StatusDestrezaDB,StatusConstituiçãoDB,StatusInteligênciaDB,StatusSabedoriaDB,StatusCarismaDB,HistoriaDB,BerisDB,InventárioDB,StatusHakiDB);</script>
</html>