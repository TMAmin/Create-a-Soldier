const button = document.getElementById('button');


    button.addEventListener('click' , function(){  
        let input = document.getElementById('name');

        var types = document.getElementById('type');
        
        var countrys = document.getElementById('country');

        let wp = document.getElementsByName('weapon');
        let weapons =Array.from(wp);
        let weapon_checked = weapons.filter( weapon => { return weapon.checked})
        
        let sd = document.getElementsByName('sidearm');
        let sidearms =Array.from(sd);
        let sidearm_checked = sidearms.filter( sidearm => { return sidearm.checked})

        let text = document.getElementById('text');

        var soldier = 
                        {
                            name : input.value,
                            type : types.value,
                            country : countrys.value,
                            weapon : weapon_checked[0].value,
                            sidearm : sidearm_checked[0].value
                        }

        let name = soldier.name;
        let type = soldier.type;
        let country = soldier.country;
        let weapon = soldier.weapon;
        let sidearm = soldier.sidearm;

        // console.log(name);
        // console.log(type);
        // console.log(country);
        // console.log(weapon);
        // console.log(sidearm);

        class Player {
            constructor(name,type,country,weapon,sidearm)
            {
                this.name = name;
                this.type = type;
                this.country = country;
                this.weapon = weapon;
                this.sidearm = sidearm;
            }
        
            info(){
            return ` Im ${this.name} a ${this.type} in the ARMY OF ${this.country} 
            I have a ${this.weapon} and a ${this.sidearm}, and a Knife .`;
            }
        }
        
        class Medic extends Player {
            constructor(name,type,country,weapon,sidearm,position,action){
                super(name,type,country,weapon,sidearm);
                this.position = "Defence position" ;
                this.action = "I SAVE LIFES"
            }
            medic_info(){
                return super.info()+"Im in "+this.position+" and "+this.action;
            }
        }

        class Demolition_Expert extends Player {
            constructor(name,type,country,weapon,sidearm,position,action){
                super(name,type,country,weapon,sidearm);
                this.position = "Defence position" ;
                this.action = "I EXPLODE THINGS HAHAHAHAHA !!!"
            }
            Demolition_Expert_info(){
                return super.info()+"Im in "+this.position+" and "+this.action;
            }
        }

        class Heavy_Gunner extends Player {
            constructor(name,type,country,weapon,sidearm,position,action){
                super(name,type,country,weapon,sidearm);
                this.position = "Defence position" ;
                this.action = "WHEN I START SHOOTING IT'S OVER"
            }
            Heavy_Gunner_info(){
                return super.info()+"Im in "+this.position+" and "+this.action;
            }
        }

        class Commando extends Player {
            constructor(name,type,country,weapon,sidearm,position,action){
                super(name,type,country,weapon,sidearm);
                this.position = "Attack position" ;
                this.action = "IF YOU HEAR ME THEN I ALREDY KILLED YOU HIHIHIIII"
            }
            Commando_info(){
                return super.info()+"Im in "+this.position+" and "+this.action;
            }
        }

        class Recon extends Player {
            constructor(name,type,country,weapon,sidearm,position,action){
                super(name,type,country,weapon,sidearm);
                this.position = "Attack position" ;
                this.action = "I CAN SEE YOU WEREVER YOU ARE !!!!"
            }
            Recon_info(){
                return super.info()+"Im in "+this.position+" and "+this.action;
            }
        }

        class Sniper extends Player {
            constructor(name,type,country,weapon,sidearm,position,action){
                super(name,type,country,weapon,sidearm);
                this.position = "Attack position" ;
                this.action = "YOU WILL FEEL NOTHING AT ALL WHEN I SHOOT YOU !!! RIP !!!"
            }
            Sniper_info(){
                return super.info()+"Im in "+this.position+" and "+this.action;
            }
        }
        //console.log(type);

        switch (type) {
            case "Medic":
                const medic = new Medic(name,type,country,weapon,sidearm);
                //console.log(medic.medic_info());
                text.textContent =medic.medic_info();
            break;
                
            case "Demolition_Expert":
                const demolition_expert = new Demolition_Expert(name,type,country,weapon,sidearm);
                //console.log(demolition_expert.Demolition_Expert_info());
                text.textContent =demolition_expert.Demolition_Expert_info();
            break;

            case "Heavy_Gunner":
                const heavy_gunner = new Heavy_Gunner(name,type,country,weapon,sidearm);
                //console.log(heavy_gunner.Heavy_Gunner_info());
                text.textContent =heavy_gunner.Heavy_Gunner_info();
            break;


            case "Commando":
                const commando = new Commando(name,type,country,weapon,sidearm);
                //console.log(commando.Commando_info());
                text.textContent = commando.Commando_info();
            break;

            case "Recon":
                const recon = new Recon(name,type,country,weapon,sidearm);
                //console.log(recon.Recon_info());
                text.textContent = recon.Recon_info();
            break;


            case "Sniper":
                const sniper = new Sniper(name,type,country,weapon,sidearm);
                //console.log(sniper.Sniper_info());
                text.textContent = sniper.Sniper_info();
            break;

            default:
                const player = new Player(name,type,country,weapon,sidearm);
                //console.log(player.info());
                text.textContent = player.info();
            break;
        }
       
})

// console.log(name);


// class Player {
//     constructor(name,type,country,weapon,sidearm)
//     {
//         this.name = name;
//         this.type = type;
//         this.country = country;
//         this.weapon = weapon;
//         this.sidearm = sidearm;
//     }

//     info(){
//     return ` Im ${this.name} a ${this.type} in the ARMY OF ${this.country} 
//     I have a ${this.weapon} and a ${this.sidearm}, and a Knife .`;
//     }
// }

// class Medic extends Player {
//     constructor(name,type,country,weapon,sidearm,position){
//         super(name,type,country,weapon,sidearm);
//         this.position = "Defence position" ;
//     }
//     medic_info(){
//         return super.info()+"Im in "+this.position;
//     }
// }
// const medic = new Medic("Amin","Medic","TUNISIA","Shotgun","Pistol");
// console.log(medic.medic_info());
// const commando = new Player("Tarek","Commando","TUNISIA","Rifel","Pistol");
// console.log(commando.info());