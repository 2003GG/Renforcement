<?php
class Task { 
    private $id; 
    private $description; 
    private $estimatedHours; 
    public function __construct($id,$description,$estimatedHours){
        $this->id=$id;
        $this->description=$description;
        $this->estimatedHours=$estimatedHours;
    }
    public function getId(){
        return $this->id;
    }
    public function getDesctiption(){
        return $this->description;
    }
    public function getEstimatedHours(){
        return $this->estimatedHours;
    }
    public function isBig($threshold){
        if($this->estimatedHours>$threshold){
            return true;
        }
    }
    }

    class Project{ 
        private $title; 
        private $dailyRate;
        private $tasks = []; 
        public function __construct($title,$dailyRate,$tasks){
            $this->title=$title;
            $this->dailyRate=$dailyRate;
            $this->tasks=$tasks;
        }
        public function getTasks(){
            return $this->tasks;
        }
        public function addTask(Task $task){
            array_push($this->tasks,$task);
            return $this->tasks;

        }
        public function calculateTotalHours(){

            foreach($this->tasks as $task){
                $total=+$task->estimatedHours;
        
            }
            return $total;
        }
        public function TotalWithBuffer($bufferPercent = 10){
                return $this->calculateTotalHours() * (1+$bufferPercent/100);
        }
        public function calculateBudget(){
            return $this->TotalWithBuffer()*($this->dailyRate/8);
        }
        public function getBigTasks($threshold){
            foreach($this->tasks as $task){
                if($task->estimatedHours>$threshold){
                    array_push($arrayFiltre,$task);
                }
                return $arrayFiltre;
            }
        }
        }

// Implémentez getBigTasks($threshold) : retourne un tableau filtré des tâches dépassant
// le seuil
$project=new Project('Refonte site web',600,['Design',12,'Dev front',30,'Dev back',45]);
?>