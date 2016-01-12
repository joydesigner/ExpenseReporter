/**
 * Created by Admin on 12/01/2016.
 */
var customMatchers = {
  toBeAResonableExpense: function(){
      return {
          compare: function(actual) {
              var pass = actual.isReasonable();
              var judgement = pass ? 'unreasonable': 'resonable';
              return {
                  pass: pass,
                  message: 'Expected expense to be a ' + judgement + ' expense'
              }
          }
      }
  }
};