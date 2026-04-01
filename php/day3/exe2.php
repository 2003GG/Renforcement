<?php
abstract class Vehicule { 
    protected $marque;
     protected $modele;   
     protected$annee;
     protected $prixBase; 
     public function __construct($marque,$modele,$prixBase,$annee){
        $this->marque=$marque;
        $this->modele=$modele;
        $this->prixBase=$prixBase;
        $this->annee=$annee;
     }
     public function getMarque(){
        return $this->marque;
     }
     public function getModele(){
        return $this->modele;
     }
     public function getPrixBase(){
        return $this->prixBase;
     }
     abstract public function getPrixFinal():float;
     abstract public function getDescription():string;
     
     }
     class Voiture extends Vehicule{
        private $fraisMiseEnRoute = 150;
        public function __construct($marque, $modele, $prixBase,$annee,$fraisMiseEnRoute){
            parent::__construct($marque,$modele,$prixBase,$annee);
            $this->fraisMiseEnRoute=$fraisMiseEnRoute;
        }
        public function getPrixFinal():float{
            return $this->prixBase+150;
        }
        public function getDescription(): string{
            return 'marque:'.$this->marque.'--->modele:'.$this->modele;
        }
    
     }
     class Moto extends Vehicule{
        private $remiseAncienne = 0.05;
        public function __construct($marque, $modele, $prixBase,$annee,$remiseAncienne){
            parent::__construct($marque,$modele,$prixBase,$annee);
            $this->remiseAncienne=$remiseAncienne;
        }
        public function getPrixFinal():float{
            if($this->annee>2020){
               return $this->prixBase-$this->remiseAncienne;
            }
        
                return $this->prixBase;
            
        }
        public function getDescription(): string{
            return 'marque:'.$this->marque.'--->modele:'.$this->modele;
        }
     }
     class Camionnette extends Vehicule{
         private $chargeUtile;
         public function __construct($marque, $modele, $prixBase, $annee,$chargeUtile){
            parent::__construct($marque,$modele,$prixBase,$annee);
            $this->chargeUtile=$chargeUtile;
         }
         public function getPrixFinal():float{
           return  $this->chargeUtile*0.10 + $this->prixBase;
         }
        
         public function getDescription(): string{
            return 'marque:'.$this->marque.'--->modele:'.$this->modele;
        }
     }
     $catalogue=[];
     $voiture1=new Voiture('TOYOTA','supera',800.434,2001,300);
     $voiture2=new voiture('Ford','GMC',2000.322,2019,2000);
     $moto=new Moto('Hondai','Kawazaki',2001.222,2016,1920);
     $camionnette=new Camionnette('Mercedes-Benz','PSM',21344.900,2019,9000);
     array_push($catalogue,$voiture1,$voiture2,$moto,$camionnette);

    foreach($catalogue as $c){
        echo $c->getDescription() . '<br>';    
        }

?>
