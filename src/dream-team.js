module.exports = function createDreamTeam(members) {
  if(typeof(members) !== 'object' || !Array.isArray(members)) {
    return false;
  }
  
    return members.filter(team => typeof(team) === 'string')
                  .map((team) => {team = team.toUpperCase()
                    for(let k = 0; k < team.length; k++) {
                      if(team[k] >= 'A' && team[k] <= 'Z') {
                        return team[k];
                      }
                    }
                  })
                  .sort()
                  .join('');
  }
 



