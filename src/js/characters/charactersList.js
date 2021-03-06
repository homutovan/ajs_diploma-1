import Swordsman from './Swordsman';
import Undead from './Undead';
import Bowman from './Bowman';
import Vampire from './Vampire';
import Magician from './Magician';
import Daemon from './Daemon';

const userChars = [Swordsman, Bowman, Magician];
const aiChars = [Undead, Vampire, Daemon];
const startUserChars = [Swordsman, Bowman];

export default { userChars, aiChars };

export { startUserChars };
