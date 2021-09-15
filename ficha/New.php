<?php
    include_once($_SERVER['DOCUMENT_ROOT']."/config.php");
    include_once($_SERVER['DOCUMENT_ROOT']."/db.php");
        $Player = $_REQUEST['player'];
        $name = $_REQUEST['name'];
        $explicacao = $_REQUEST['explicacao'];
        $List = $_REQUEST['list'];
        $d20 = $_REQUEST['d20'];
        $d12 = $_REQUEST['d12'];
        $d10 = $_REQUEST['d10'];
        $d8 = $_REQUEST['d8'];
        $d6 = $_REQUEST['d6'];
        $d4 = $_REQUEST['d4'];
        $key = $_REQUEST['key'];
        $id = $_REQUEST['Id'];
        $personagem = $_REQUEST['namepersonagem'];
        echo $id;
        function createItem($Player,$name,$explicacao,$List,$d20,$d12,$d10,$d8,$d6,$d4,$key,$id,$personagem){
         abre_bd();
         $conn = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
         $sql = "Select * From ".$List." WHERE ID='".$id."'AND Player='".$Player."'AND NomePersonagem='".$personagem."';";

         echo "<script>console.log(".$sql.")</script>";
         $verifica = $conn->query($sql) or die("erro");
            if (mysqli_num_rows($verifica)<=0){
                $sqle = "INSERT INTO ".$List." (ID,NomePersonagem,Player,nomeHAB,explica,d4,d6,d10,d12,d20,d8)
                        VALUES('".$id."','".$personagem."','".$Player."','".$name."','".$explicacao."','".$d4."','".$d6."','".$d10."','".$d12."','".$d20."','".$d8."');";
                        echo "<script>console.log(".$sqle.")</script>";
                        $verifica = $conn->query($sqle) or die("ERRO2!!");
                
            }
            else{
                echo "<script>alert('Id já utilizado, favor escolher outro!!') </script>";
              }
        fecha_db($conn);
        }
        createItem($Player,$name,$explicacao,$List,$d20,$d12,$d10,$d8,$d6,$d4,$key,$id,$personagem);
  
  
  ?>