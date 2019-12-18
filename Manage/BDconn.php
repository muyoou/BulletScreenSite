<?php
class BDconn{
	
	var $conn;
	var $result;
	function conn(){
		// 创建连接
		$servername = "localhost";
		$username = "root";
		$password = "740813";
		$dbname = "BulletService";
		$this->conn = new mysqli($servername, $username, $password, $dbname);
		// 检测连接
		if ($this->conn->connect_error) {
    		die("连接失败: " . $conn->connect_error);
		} 
	}
	
	function excu($sql){
		$this->result=$this->conn->query($sql);
		
	}
	
	function excu2($sql){
		$this->result=mysqli_query($this->conn,$sql);
	}
	
	function isSuc(){
		if ($this->result === TRUE) {
    		echo "新记录插入成功";
		} else {
    		echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	
	function getXMLResult(){
		if ($this->result->num_rows > 0) {
    		$xmlstr='<?xml version="1.0" encoding="ISO-8859-1"?><mydata>';
			$max=0;
    		while($row = $this->result->fetch_assoc()) {
				if($row["no"]>$max) $max=$row["no"];
				$xmlstr.='<bullet><id>'.$row["no"].'</id><data>'.$row["data"].'</data><color>'.$row['color'].'</color><pos>'.$row['pos'].'</pos><time>'.$row['time'].'</time></bullet>';
    		}
			$xmlstr.='<maxnum>'.$max.'</maxnum>';
			$xmlstr.='</mydata>';
			echo $xmlstr;
		} else {
    		echo "0 结果";
		}
	} 
	
	function close(){
		$this->conn->close();
	}
}
?>