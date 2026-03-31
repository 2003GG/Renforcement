<?php 
class CompteBancaire{
    private $titulaire;
    private $iban;
    private $solde;
     public function __construct($titulaire,$iban,$solde=0){
        $this->titulaire=$titulaire;
        $this->iban=$iban;
        $this->solde=$solde;

     }
     public function getTitulaire(){
        return $this->titulaire;
     }
     public function getIban(){
        return $this->iban;
     }
     public function getSolde(){
        return $this->solde;
     }
     public function deposer($montant){
        if($montant>0){
            $this->solde+=$montant;
        }
     }
    public function retirer($montant){
        if($montant>0 && $montant>=$this->solde){
            echo 'Solde suffisant';
        }
        else{
            echo 'Solde insuffisant';
        }
    }
    public function afficherInfos() {
        echo 'titulaire: '.$this->titulaire.'---> Iban:'.$this->iban.'----> solde:'.$this->solde;
    }
}

$compt1=new CompteBancaire('Mo','12-we-312-wqdp-222',0);

$compt1->deposer(120);
$compt1->afficherInfos();
?>