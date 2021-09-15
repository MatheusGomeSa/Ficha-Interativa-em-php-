<?php
include_once($_SERVER['DOCUMENT_ROOT']."/config.php");
include_once($_SERVER['DOCUMENT_ROOT']."/db.php");

$Name = $_REQUEST['name'];
$Id = $_REQUEST['id'];
$Local = $_REQUEST['local'];
$info = $_REQUEST['info'];

    $conn = new mysqli(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);
    
    $sql = "SELECT ".$info." FROM ".$Local." WHERE id = '".$Id."' AND nomeHAB = '".$Name."';";
    $result = $conn->query($sql);
    $row = $result->fetch_array(MYSQLI_NUM);
    $result = array();
    $n = 0;
    for($i=4; $i<=11;$i++){
        $result[$n] = $row[$i];
    }

    echo json_encode($result);
?>
