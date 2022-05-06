// applyng principle single responsability
// prioritize composition over inheritance(priorizar composision frente a herencia)

(() => {

    type Gender = 'M' | 'F';

    interface PersonProps {
        name     : string,
        gender   : Gender,
        birthdate: Date,
    }

    class Person {

        public name     : string;
        public gender   : Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name       = name;
            this.gender     = gender;
            this.birthdate  = birthdate;
        }
    }

    interface UserProps {
        email    : string;
        role     : string;
    }

    class User  {

        public email     : string;
        public role      : string;
        public lastAccess: Date;

        constructor({ 
            email, 
            role, 
        }: UserProps ) {
            this.email      = email;
            this.role       = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingProps {
        workingDirectory: string;
        lastOpenFolder  : string;
    }

    class Setting  {

        public workingDirectory: string;
        public lastOpenFolder  : string;

        constructor({
            workingDirectory,
            lastOpenFolder
        }: SettingProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder   = lastOpenFolder;
        }
    }

    // composicion

    interface UserSettingProps {
        workingDirectory: string;
        lastOpenFolder  : string;
        email           : string;
        role            : string;
        name            : string;
        gender          : Gender;
        birthdate       : Date;
    }

    class UserSettings {
        public persona: Person;
        public user   : User;
        public setting: Setting

        constructor({
            workingDirectory,
            lastOpenFolder  ,
            email           ,
            role            ,
            name            ,
            gender          ,
            birthdate       ,
        }: UserSettingProps ){
            this.user    = new User({email, role})
            this.persona = new Person({ name, gender, birthdate });
            this.setting = new Setting({workingDirectory, lastOpenFolder});
        }

    }

    const userS = new UserSettings({
        workingDirectory: "c:/..",
        lastOpenFolder: "/home",
        email: "v@v.cl",
        role: "ADM",
        name: "Victor",
        gender: "M",
        birthdate: new Date("1985-10-21")
    });

    console.log({ userS, checkC: userS.user.checkCredentials() })


})();