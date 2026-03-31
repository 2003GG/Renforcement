<?php
class Produit{
    private $nom;
    private $prix;
    private $stock;
    public function __construct($nom,$prix,$stock){
        $this->nom=$nom;
        $this->prix=$prix;
        $this->stock=$stock;
    }
    public function getNom(){
        return $this->nom;
    }
     public function getPrix(){
        return $this->prix;
    }
     public function getStock(){
        return $this->stock;
    }

    public function setNom($nom){
        $this->nom=$nom;
    }
    
    public function setPrix($prix){
        if($prix<0){
            echo 'invalid prix negative';
        }
        $this->prix=$prix;
    }
    public function afficher(){
        echo 'nom :'.$this->nom.'---> Prix:'.$this->prix .'--->Stock:'.$this->stock;
    }
}
$produit1=new Produit('chaier',12.22,20);
$produit1->afficher();

$produit1->setPrix(-33);

echo $produit1->getNom();
echo $produit1->getPrix();



