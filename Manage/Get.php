<?php
include(BDconn.php);

include  'BDconn.php';
$bd=new BDconn;
$bd->conn();
 
$sql = "SELECT * FROM bullet WHERE videoID=0 ORDER BY time";
 $bd->excu2($sql);
$bd->getXMLResult();
$bd->close();

  


?>