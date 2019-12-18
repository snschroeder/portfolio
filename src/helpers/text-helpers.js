const textHelpers = {
  generateStartText(length) {
    const startText = [];
    for (let i = 0; i < length; i += 1) {
      const char = Math.floor(Math.random() * Math.floor(91)) + 32;
      const gene = {
        char,
        strength: 999,
      };
      startText.push(gene);
    }
    return startText;
  },

  gradeInput(mutantText, goal) {
    const mutantClone = mutantText.map((char) => char);
    for (let i = 0; i < mutantClone.length; i += 1) {
      mutantClone[i].strength = Math.abs(mutantClone[i].char - goal.charCodeAt(i));
    }
    return mutantClone;
  },

  mutateText(parent1, parent2, goal) {
    const offspring = [];

    for (let i = 0; i < parent1.length; i += 1) {
      if (parent1[i].strength > 0 || parent2[i].strength > 0) {
        let variance = 0;
        if (parent1[i].strength + parent2[i].strength > 30) {
          variance = Math.floor(Math.random() * Math.floor(31));
        } else if (parent1[i].strength + parent2[i].strength > 10) {
          variance = Math.floor(Math.random() * Math.floor(11));
        } else {
          variance = Math.floor(Math.random() * Math.floor(3));
        }

        if (Math.floor(Math.random() * 2) === 1) {
          variance *= -1;
        }

        let char = Math.round(((parent1[i].char + parent2[i].char) / 2) + variance);
        if (char > 123) {
          char -= 50;
        } else if (char < 32) {
          char += 50;
        }
        const gene = {
          char,
          strength: 999,
        };
        offspring.push(gene);
      } else {
        offspring.push(parent1[i]);
      }
    }
    console.log(offspring);
    // const gradedOffspring = this.gradeInput(offspring, goal);
    return offspring;
  },

  CreateOffspring(herd, goal) {
    const offspring = [];
    for (let i = 0; i < herd[0].length; i += 1) {
      for (let j = i + 1; j < herd[0].length; j += 1) {
        offspring.push(this.mutateText(herd[i], herd[j], goal));
      }
    }
    return offspring;
  },

  getStrengthTotal(mutantText) {
    let strengthTotal = 0;
    for (let i = 0; i < mutantText.length; i += 1) {
      strengthTotal += mutantText[i].strength;
    }
    return strengthTotal;
  },

  cullTheHerd(herd) {
    let strongest = 1000;
    let secondStrongest = 1001;

    let parent1 = herd[0].map((vals) => vals);
    let parent2 = herd[1].map((vals) => vals);

    for (let i = 0; i < herd.length; i += 1) {
      if (this.getStrengthTotal(herd[i] < secondStrongest
      && this.getStrengthTotal(herd[i] < strongest))) {
        secondStrongest = strongest;
        strongest = this.getStrengthTotal(herd[i]);
        parent2 = parent1.map((vals) => vals);
        parent1 = herd[i].map((vals) => vals);
      } else if (this.getStrengthTotal(herd[i]) < secondStrongest
      && this.getStrengthTotal(herd[i] >= strongest)) {
        secondStrongest = this.getStrengthTotal(herd[i]);
        parent2 = herd[i].map((vals) => vals);
      }
    }
    return [parent1, parent2];
  },

  altCullTheHerd(herd) {
    const herdSize = herd.length;
    let herdStrength = 0;
    let herdAvg = 0;

    for (let i = 0; i < herdSize; i += 1) {
      herdStrength += this.getStrengthTotal(herd[i]);
    }

    herdAvg = Math.round(herdStrength / herdSize);

    return herd.filter((member) => this.getStrengthTotal(member) < herdAvg);
  },

  evolveText(length, goal) {
    let goalReached = false;
    const herd = [];

    for (let i = 0; i < 100; i += 1) {
      herd.push(this.generateStartText(length));
      this.gradeInput(herd[i], goal);
    }

    let count = 0;

    while (!goalReached) {
      const breeders = this.altCullTheHerd(herd);
      herd.length = 0;
      // console.log(breeders);

      // const offspring = this.CreateOffspring(breeders);
      // console.log(offspring);

      if (this.getStrengthTotal(breeders[0]) === 0 || count > 1) {
        goalReached = true;
        console.log('I think I have the solution');
        console.log('count is ' + count);
        return breeders[0];
      }

      for (let i = 0; i < 50; i += 1) {
        herd.push(this.mutateText(breeders[0], breeders[1], goal));
      }
      count += 1;
    }
  },
};


const text = 'hi';
// const text = 'Hello, I am your test input. However, this time I am longer than before.';
const len = text.length;

const results = textHelpers.evolveText(len, text);

const codes = [];

for (let i = 0; i < results.length; i += 1) {
  codes.push(results[i].char);
}
// console.log(results);

console.log('output ' + String.fromCharCode(...codes));

// export default textHelpers;
