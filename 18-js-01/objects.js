class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  descrbibe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location}, and I earn ${this.salary}.`
    );
  }
}

const developer = new Job('aa', 'vv', 'cc');
const cooker = new Job('cooker', 'restuarant', 50000);

developer.descrbibe();
cooker.descrbibe();
