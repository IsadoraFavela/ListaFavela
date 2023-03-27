export class Usuario {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
    public age: number,
    public isTop10: boolean,
    public birthdate: Date,
  ) {}

  get fullName(): string {
    return this.firstName +" "+ this.lastName;
  }

  public date(){
    return this.birthdate.toLocaleDateString('es-mx', { weekday:"long", year:"numeric", month:"long", day:"numeric"}); 
    
  }
}

