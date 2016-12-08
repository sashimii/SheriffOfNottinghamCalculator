var calculator = new Vue({
  el: '#calculator',
  data: {
    message: 'What is up dawg',
    legal: {
      cheese: null,
      bread: null,
      apple: null,
      chicken: null
    },
    illegal: {
      pepper: null,
      mead: null,
      silk: null,
      crossbow: null
    },
    gold: {
      '1g' : null,
      '5g' : null,
      '20g' : null,
      '50g' : null
    },
    king: {
      apple: false,
      bread: false,
      cheese: false,
      chicken: false
    },
    queen: {
      apple: false,
      bread: false,
      cheese: false,
      chicken: false
    }

  },
  computed: {

    // Legal Goods
    breadTotalGold: function() {
      return (this.legal.bread * 3) + (this.king.bread ? 15 : 0) + (this.queen.bread ? 10 : 0);
    },
    appleTotalGold: function() {
      return this.legal.apple * 2  + (this.king.apple ? 20 : 0) + (this.queen.apple ? 10 : 0);
    },
    cheeseTotalGold: function() {
      return this.legal.cheese * 3  + (this.king.cheese ? 15 : 0) + (this.queen.cheese ? 10 : 0);
    },
    chickenTotalGold: function() {
      return this.legal.chicken * 4  + (this.king.chicken ? 10 : 0) + (this.queen.chicken ? 5 : 0);
    },

    // Contraband Goods
    pepperTotalGold: function() {
      return this.illegal.pepper * 6;
    },
    meadTotalGold: function() {
      return this.illegal.mead * 7;
    },
    silkTotalGold: function() {
      return this.illegal.silk * 8;
    },
    crossbowTotalGold: function() {
      return this.illegal.crossbow * 9;
    },

    // Gold Coins
    totalOneGold: function() {
      return this.gold['1g'] * 1;
    },
    totalFiveGold: function() {
      return this.gold['5g'] * 5;
    },
    totalTwentyGold: function() {
      return this.gold['20g'] * 20;
    },
    totalFiftyGold: function() {
      return this.gold['50g'] * 50;
    },

    // Absolute Total
    absoluteTotalGold: function () {
      return (
        this.breadTotalGold +
        this.appleTotalGold +
        this.cheeseTotalGold +
        this.chickenTotalGold +
        this.pepperTotalGold +
        this.meadTotalGold +
        this.silkTotalGold +
        this.crossbowTotalGold +
        this.totalOneGold +
        this.totalFiveGold +
        this.totalTwentyGold +
        this.totalFiftyGold
      );

    },

    // King & Queen Checkbox Handlers


  }
})
