<!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta name="viewport" content="width= device-width inicial-scale=1.0">
            <script src='https://kit.fontawesome.com/a076d05399.js'></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
            <link rel="stylesheet" href="login.css">
        </head>
        <body>
        <?php $personagem = $player = $identificação = ''?> 
        <?php require_once 'config.php'?>
        <?php require_once 'db.php'?>    
        <div id="fundo">
                <div class="shadow-lg p-3 mb-5 bg-secondary border border-dark border-2 rounded"id="login">
                    <div class="margem">
                        <div>
                            <h1 >Login</h1>  
                            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                                <input placeholder="Nome do jogador:"class="form-control" type="text" name="player" value="<?php echo $player;?>"><br/>
                                <input placeholder="Nome do personagem:"class="form-control" type="text" name="personagem"value="<?php echo $personagem;?>"><br/>
                                <input placeholder="Id:"class="form-control" type="text" name="identificação"value="<?php echo $identificação;?>"><br/>
                                <input type="submit" name="login" value="Login"><input type="submit" name="cadastro" value="Cadastro">
                            </form>
                            
                        </div>
                </div>
                </div>
            </div>
            <?php


            function test_input($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
              }

            if($_SERVER["REQUEST_METHOD"]== "POST"){
                if($_POST['login']){
                    if(empty($_POST["player"])){
                        echo "<script>alert('player invalido');</script>";
                    }else{
                    $player = test_input($_POST["player"]);}
                    if(empty($_POST["personagem"])){
                        echo "<script>alert('Nome do personagem invalido');</script>";
                    }else{
                    $personagem = test_input($_POST["personagem"]);}
                    if(empty($_POST["identificação"])){
                        echo "<script>alert('ID invalido');</script>";
                    }else{
                    $identificação = test_input($_POST["identificação"]);}   
                    if( (empty($_POST["player"]) == false) && (empty($_POST["personagem"]) == false) && (empty($_POST["identificação"]) == false))
                    {login($player,$personagem,$identificação);}             
                }elseif($_POST['cadastro']){
                    if(empty($_POST["player"])){
                        echo "<script>alert('player invalido');</script>";
                    }else{
                    $player = test_input($_POST["player"]);}
                    if(empty($_POST["personagem"])){
                        echo "<script>alert('Nome do personagem invalido');</script>";
                    }else{
                    $personagem = test_input($_POST["personagem"]);}
                    if(empty($_POST["identificação"])){
                        echo "<script>alert('ID invalido');</script>";
                    }else{
                    $identificação = test_input($_POST["identificação"]);}   
                    if( (empty($_POST["player"]) == false) && (empty($_POST["personagem"]) == false) && (empty($_POST["identificação"]) == false))
                    {registro($identificação,$player,$personagem);
                    login($player,$personagem,$identificação);}   
                }

            }
            ?>
            <?php
                
            ?>

        </body>
    </html>
