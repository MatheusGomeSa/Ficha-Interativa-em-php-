<?php
    mysqli_report(MYSQLI_REPORT_STRICT);
    function abre_bd(){
        try{
            $conn = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
            return $conn;
        }catch(Exception $e){
            echo $e->getMessage();
            return null;
        }
    }
    function fecha_db($conn){
        try{
            mysqli_close($conn);
        }catch(Exception $e){
            echo $e->getMessage();
        }
    }

    function login($player,$personagem,$id){
        abre_bd();
            $conn = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
            $sql = "Select * From personagens WHERE Nome='".$personagem."' AND Player = '".$player."' AND ID='".$id."'";
            $verifica = $conn->query($sql) or die("erro");
            if (mysqli_num_rows($verifica)<=0){
                echo"<script language='javascript' type='text/javascript'>
                alert('Login e/ou senha incorretos');</script>";
              }else{
                setcookie("ID",$id,time()+3600);
                setcookie("Player",$player,time()+3600);
                setcookie("Personagem",$personagem,time()+3600);               
                echo "<script language='javascript' type='text/javascript'>alert('DEU CERTO');window.location.href='login.html';</script>";
                header('Location: /ficha/home.php');
              }
            fecha_db($conn);
        }

    function pegarinfo($player,$personagem,$id){
        $conn = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);

        $TruqueArray = array("0"=>"IDHAB",
                            "1"=>"nomeHAB",
                            "2"=>"explica",
                            "3"=>"d4",
                            "4"=>"d6",
                            "5"=>"d10",
                            "6"=>"d12",
                            "7"=>"d20",
                            "8"=>"d8"
    );
      $TruqueArray2 = array("0"=>"IDHAB",
                            "1"=>"nomeHAB",
                            "2"=>"explica",
                            "3"=>"d4",
                            "4"=>"d6",
                            "5"=>"d10",
                            "6"=>"d12",
                            "7"=>"d20",
                            "8"=>"d8"
    );

        $array = array("0"=>"Idade",
                        "1"=>"Aparencia",
                        "2"=>"Fruta",
                        "3"=>"Raça",
                        "4"=>"Classe",
                        "5"=>"EstilodeLuta",
                        "6"=>"StausForça",
                        "7"=>"StausDestreza",
                        "8"=>"StausConstituição",
                        "9"=>"StausInteligência",
                        "10"=>"StausSabedoria",
                        "11"=>"StausCarisma",
                        "12"=>"StausHaki",
                        "13"=>"VidaMax",
                        "14"=>"VidaAtual",
                        "15"=>"Ifecção",
                        "16"=>"Historia",
                        "17"=>"Beris",
                        "18"=>"Inventário",
                        "19"=>"EstaminaAtual",
                        "20"=>"EstaminaMax",
                        "21"=>"Anotacao"
                        );
        $array2 = array("0"=>"IdadeDB",
                        "1"=>"AparenciaDB", 
                        "2"=>"FrutaDB",
                        "3"=>"RaçaDB",
                        "4"=>"ClasszDB",
                        "5"=>"EstilodeLutaDB",
                        "6"=>"StatusForçaDB",
                        "7"=>"StatusDestrezaDB",
                        "8"=>"StatusConstituiçãoDB",
                        "9"=>"StatusInteligênciaDB",
                        "10"=>"StatusSabedoriaDB",
                        "11"=>"StatusCarismaDB",
                        "12"=>"StatusHakiDB",
                        "13"=>"VidaMaxDB",
                        "14"=>"VidaAtualDB",
                        "15"=>"IfecçãoDB",
                        "16"=>"HistoriaDB",
                        "17"=>"BerisDB",
                        "18"=>"InventárioDB",
                        "19"=>"EstaminaAtualDB",
                        "20"=>"EstaminaMaxDB",
                        "21"=>"AnotacaoDB"
                        );
        echo "<script>";
        for ($i = 0; $i <=21;$i++){
            $sql = "SELECT ".$array[$i]." FROM personagens WHERE ID ='".$id."' AND Nome ='".$personagem."' AND Player ='".$player."'";
            $result = $conn->query($sql);
            $row = $result->fetch_array(MYSQLI_ASSOC);
            echo "var ".$array2[$i]."='".$row[$array[$i]]."';";
    }
    echo "</script>";
    }
    function registro($id,$player,$personagem){
        abre_bd();
        $conn = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
            $sql = "Select * From personagens WHERE ID='".$id."'";
            $verifica = $conn->query($sql) or die("erro");
            if (mysqli_num_rows($verifica)<=0){
                $sql2 = "INSERT INTO personagens (Nome,Player,Idade,Aparencia,Fruta,Raça,Classe,EstilodeLuta,StausForça,StausDestreza,StausConstituição,StausInteligência,StausSabedoria,StausCarisma,StausHaki,VidaMax,VidaAtual,Ifecção,Historia,Beris,Inventário,ID) 
                                  VALUES('".$personagem."','".$player."','0','0','','','','','0','0','0','0','0','0','0','0','0','0','','0','','".$id."');";
                    echo $sql2;

                if($conn->query($sql2) === TRUE){
                    echo "Deu Certo";
                }else{
                    echo "Erro;-;";
                }
              }else{
                echo "<script>alert('Id já utilizado, favor escolher outro!!') </script>";
              }
            fecha_db($conn);
    }

?>

