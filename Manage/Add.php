
<?php

include  'BDconn.php';
$bd=new BDconn;
$bd->conn();
$sql = "INSERT INTO bullet (videoID, data, color,pos,time) VALUES (".$_POST['id'].",'".$_POST['data']."', ".$_POST['color'].", ".$_POST['pos'].", ".$_POST['time'].")";
$bd->excu($sql);
$bd->isSuc();
$bd->close();
 


?>