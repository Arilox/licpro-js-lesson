// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction, Notes
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import Terminal from "spectacle-terminal";

import Typist from "react-typist";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Prism
import langHttp from "prismjs/components/prism-http";
import langBash from "prismjs/components/prism-bash";


// Require CSS

require("prismjs/themes/prism-solarizedlight.css")
require("normalize.css");


let theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

theme = {
  ...theme,
  screen: {
    ...theme.screen,
      components: {
        ...theme.screen.components,
        codePane: {
          ...theme.screen.components.code,
          fontSize: '90%',
        }
      }
  }
}

//import { theme as themeSolarizedLight } from "spectacle-theme-solarized-light";

const images = {
  youCanUse: require('../assets/you-can-use.jpeg'),
  babelMeme: require('../assets/babel_meme.jpg'),
  component: require('../assets/component.png'),
  component1: require('../assets/component1.png'),
  component2: require('../assets/component2.png'),
  component3_1: require('../assets/component3-1.png'),
  component3_2: require('../assets/component3-2.png'),
  component4: require('../assets/component4.png'),
  component5: require('../assets/component5.png'),
  event_loop: require('../assets/images/event_loop.png'),
  http_message: require('../assets/images/http_message.jpg'),
  http_header: require('../assets/images/http_header.jpg'),
};

const cursor = { show: false, blink: true, element: "|", hideWhenDone: false, hideWhenDoneDelay: 500 };

class Example3_1 extends React.Component {
  changeColor(color) {
    const elem = document.getElementById("examplel3-1");
    elem.style.color = color;
  }

  render() {
    return (
      <div>
        <p id="examplel3-1">Un peu de texte.</p>
        <button onClick={() => this.changeColor('blue')}>bleu</button>
        <button onClick={() => this.changeColor('red')}>rouge</button>
      </div>
    )
  }
}

class Example3_3 extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {color: 'green'};
    this.changeColorBlue = this.changeColorBlue.bind(this);
  }

  changeColorBlue() {
    this.setState({color: 'blue'});
  }

  changeColor(color) {
    this.setState({color: color});
  }

  render() {
    const style = { color: this.state.color };
    return (
      <div>
        <p style={ style }>{this.props.text}</p>
        <button onClick={this.changeColorBlue}>bleu</button>
        <button onClick={() => this.changeColor('red')}>rouge</button>
      </div>
    )
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="number">
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} >
            Javascript
          </Heading>
          <Heading size={6} fit caps>
            LicPro 2017/2018
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} >
            Who Is Speaking?
          </Heading>
          <Appear fid="1">
            <Heading size={3}>Claude Dioudonnat</Heading>
          </Appear>
          <Appear fid="2">
            <Text size={6}><strong>Graduated from</strong> IUT (DUT + Lic Pro Mobile)</Text>
          </Appear>
          <Appear fid="3">
            <Text size={6} ><strong>Work at</strong> ITNetwork</Text>
          </Appear>
          <Appear fid="4">
            <Text size={6}><strong>Worked at:</strong> Modis, Université Blaise Pascal, In My City</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Contact</Heading>
            <List>
              <ListItem>licpro2019@dioudonnat.fr</ListItem>
              <ListItem>claude@dioudonnat.fr</ListItem>
              <ListItem>claudusd</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Rules</Heading>
          <List ordered >
            <Appear fid="1">
              <ListItem>RTFM</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Use your Brain</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Ask Questions</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>How ?</Heading>
          <List>
            <Appear fid="1">
              <ListItem>14H of Lecture</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>20H of Pratical</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Test</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Poll</Heading>
          <Notes>
            <ul>
              <li>Ou Bac + 2</li>
              <li>Alternance ?</li>
              <li>Ou ?</li>
              <li>Qui a déjà fait du javascript</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" id="lesson_list">
          <GoToAction slide="lesson1">Lesson 1</GoToAction>
          <GoToAction slide="lesson2">Lesson 2</GoToAction>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" id="lesson1">
          <Heading size={1} caps>Lesson 1</Heading>
          <Heading size={2} caps>History, JS, and NPM</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>1990</Heading>
          <Heading size={5}>World Wide Web</Heading>
          <Heading size={4}>Tim Berners-Lee</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Browser</Heading>
            <List>
              <ListItem>1993 NCSA Mosaic</ListItem>
              <ListItem>1995 Netscape Navigator</ListItem>
              <ListItem>1995 Internet Explorer 1</ListItem>
              <ListItem>2004 Firefox 1</ListItem>
              <ListItem>2008 Google Chrome</ListItem>
              <ListItem>2015 Microsoft Edge</ListItem>
              <ListItem>...</ListItem>
            </List>
            <Notes>
              Guerre des Navigateur dans les années 2000
            </Notes>
        </Slide>
        <Slide>
          <Heading size={1} caps>Why Javascript ?</Heading>
          <Notes>
            Expliquer où se trouve du js :
            <ul>
              <li>navigateur</li>
              <li>serveur</li>
              <li>iot</li>
              <li>serverless</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Long Time Ago</Heading>
          <Appear fid="1">
            <List>
              <ListItem>LiveScript May 1995</ListItem>
              <ListItem>Brendan Eich</ListItem>
              <ListItem>Server</ListItem>
            </List>
          </Appear>
          <Notes>
            Brendan Eich
            <ul>
              <li>avril 1995, il rejoint Netscape</li>
              <li>1998, il rejoint Mozilla</li>
              <li>2003, fin de netscape navigator par AOL</li>
              <li>2014 quitte Mozzila et travaille sur Brave</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
              <ListItem>LiveScript -> Javascript</ListItem>
              <ListItem>March 1996 Netscape Navigator 2.0</ListItem>
              <Appear>
                <ListItem>JScript By Microsoft</ListItem>
              </Appear>
                <Appear>
                <ListItem>August 1996 Internet Explorer 3.0</ListItem>
              </Appear>
            </List>
            <Notes>
              <div>Du js est ajouté dans le navigateur pour rendre
                les sites plus dynamique
              </div>
              <div>
                Bataille entre Netscape et IE
              </div>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>ECMA-262</Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>June 1997</TableItem>
                <TableItem>ES1</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>June 1998</TableItem>
                <TableItem>ES2</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>December 1999</TableItem>
                <TableItem>ES3</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>\</TableItem>
                <TableItem>ES4</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>December 2009</TableItem>
                <TableItem>ES5</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>June 2015</TableItem>
                <TableItem>ES6</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>June 2016</TableItem>
                <TableItem>ES7</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>June 2017</TableItem>
                <TableItem>ES8</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>June 2018</TableItem>
                <TableItem>ES9</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Current</TableItem>
                <TableItem>ES Next</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Notes>
            <ul>
              <li>Une Specification, plusieures implémantations</li>
              <li>ES4 Abandonnée</li>
              <li>Chaque édition apporte de nouvelles fonctionnalités.</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <div>
              <Image src={images.youCanUse.replace('/', '')} />
            </div>
            <Appear order={1}>
              <div>
                <Text size={8} textColor="primary">
                  <a
                    className="fragment"
                    href="http://kangax.github.io/compat-table/es6/"
                  >
                    *Under Conditions...
                  </a>
                </Text>
              </div>
            </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Data Type</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source="var foo;
typeof foo;"
            margin="20px auto"
            overflow = "overflow"
          />
          <Appear order={1} >
            <Heading size={1} fit>
              undefined
            </Heading>
          </Appear>
          <Appear order={2} >
            <div>
              <CodePane
                lang="jsx"
                source="foo == undefined;"
                margin="20px auto"
                overflow = "overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source="var foo = true;
typeof foo;"
            margin="20px auto"
            overflow = "overflow"
          />
          <Appear order={1} >
            <Heading size={1} fit>
              boolean
            </Heading>
          </Appear>
          <Appear order={2} >
            <div>
              <CodePane
                lang="jsx"
                source="foo == true;"
                margin="20px auto"
                overflow = "overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source="var foo = 5;
typeof foo;"
            margin="20px auto"
            overflow = "overflow"
          />
          <Appear order={1} >
            <Heading size={1} fit>
              number
            </Heading>
          </Appear>
          <Appear order={2} >
            <div>
              <CodePane
                lang="jsx"
                source="foo == 5;"
                margin="20px auto"
                overflow = "overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>Number</Heading>
            <CodePane
              lang="jsx"
              source={require('raw-loader!../assets/l1-example/2.js')}
              margin="20px auto"
              overflow = "overflow"
              />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source="var foo = 'hi';
typeof foo;"
            margin="20px auto"
            overflow = "overflow"
          />
          <Appear order={1} >
            <Heading size={1} fit>
              string
            </Heading>
          </Appear>
          <Appear order={2} >
            <div>
              <CodePane
                lang="jsx"
                source="foo == 'hi';"
                margin="20px auto"
                overflow = "overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} caps>String</Heading>
            <CodePane
              lang="js"
              source={require('raw-loader!../assets/l1-example/27.js')}
              margin="20px auto"
              overflow = "overflow"
              />
              <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String">
              Documentation
              </a>
              <Notes>
                <ul>
                  <li>il existe beaucoup d'autres fonctions dans la spec</li>
                </ul>
              </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source="var foo = null;
foo == null;"
            margin="20px auto"
            overflow = "overflow"
          />
          <Appear order={1} >
            <Heading size={1} fit>
              null
            </Heading>
          </Appear>
          <Appear order={2} >
            <div>
              <CodePane
                lang="jsx"
                source="foo !== undefined;"
                margin="20px auto"
                overflow = "overflow"
              />
            </div>
          </Appear>
          <Notes>
            <ul>
              <li>Le typeof return "object"</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source="var foo = function () { };
typeof foo;"
            margin="20px auto"
            overflow = "overflow"
          />
          <Appear order={1} >
            <Heading size={1} fit>
              function
            </Heading>
          </Appear>
          <Appear order={2} >
            <div>
              <CodePane
                lang="jsx"
                source="foo != function () { };"
                margin="20px auto"
                overflow = "overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Function</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/function-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Paramètre et valeur de retour non typés.</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Function</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/function-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Même que précédement</li>
                <li>Utilisation d'une fonction anonyme affectée à la variable</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Function</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/function-3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Même que précédement</li>
                <li>Utilisation d'une fonction fléchée (arrow function) affectée à la variable</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source="var foo = [];
Array.isArry(foo);"
            margin="20px auto"
            overflow = "overflow"
          />
          <Appear order={1} >
            <Heading size={1} fit>
              array
            </Heading>
          </Appear>
          <Appear order={2} >
            <div>
              <CodePane
                lang="jsx"
                source="foo != [];"
                margin="20px auto"
                overflow = "overflow"
              />
            </div>
          </Appear>
          <Notes>
            <ul>
              <li>typeof de array return object</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Array</Heading>
          <CodePane
            lang="jsx"
            source="let foo = ['A', 'B'];
console.log(foo[0]);
foo.push('C');
console.log(foo.length);"
            margin="20px auto"
            overflow = "overflow"
            />
            <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array">
            Documentation
            </a>
            <Notes>
              <ul>
                <li>Des methodes sur les array</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source="var foo = {};
typeof foo;"
            margin="20px auto"
            overflow = "overflow"
          />
          <Appear order={1} >
            <Heading size={1} fit>
              object
            </Heading>
          </Appear>
          <Appear order={2} >
            <div>
              <CodePane
                lang="jsx"
                source="foo != {};"
                margin="20px auto"
                overflow = "overflow"
              />
            </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object</Heading>
          <CodePane
            lang="jsx"
            source="let foo = {firstName: 'Claude'};
console.log(foo.firstName);
foo.lastName = 'Dioudonnat';
console.log(foor.lastName);"
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Utilisation de let à la place de const</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object</Heading>
          <CodePane
            lang="jsx"
            source="foo.job = {title:'Dev', company: 'ITN'}"
            margin="20px auto"
            overflow = "overflow"
            />
          <Appear order={1} >
            <div>
              <CodePane
                lang="jsx"
                source="foo.job.company"
                margin="20px auto"
                overflow = "overflow"
                />
            </div>
          </Appear>
            <Notes>
              <ul>
                <li>Sous objet</li>
                <li>Comment accèder à company ?</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object destructuring</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/object-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Utilisation de const</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Object destructuring</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/object-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <a href="http://exploringjs.com/es6/ch_destructuring.html">More</a>
            <Notes>
              <ul>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>JSON</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/object-3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Appear order={2} >
              <div>
                <CodePane
                  lang="json"
                  source={require('raw-loader!../assets/l1-example/json-1.json')}
                  margin="20px auto"
                  overflow = "overflow"
                />
              </div>
            </Appear>
            <Notes>
              <ul>
                <li>Transformer un objet en son annotation json</li>
                <li>La function n'est pas présente.</li>
                <li>Le JSON c'est du texte</li>
                <li>Atention à la syntaxe</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>JSON</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/object-4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Pourquoi le JSON, et pas le XML</li>
                <li>Simple d'utiliser du JSON depuis une API</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Class</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/class-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Class</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/class-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Class</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/class-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Un avis sur la syntaxe</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Class</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/class-3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Depuis ES6</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Class</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/class-4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Depuis ES6</li>
                <li>Attention, ce n'est pas de la vrai POO</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Syntax</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/syntax-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Syntax</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/syntax-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Error</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/error-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
            <ul>
              <li>instanceof pour connaître le type de notre class</li>
            </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Errors</Heading>
          <List>
            <ListItem>Error</ListItem>
            <ListItem>EvalError</ListItem>
            <ListItem>RangeError</ListItem>
            <ListItem>ReferenceError</ListItem>
            <ListItem>SyntaxError</ListItem>
            <ListItem>TypeError</ListItem>
            <ListItem>URIError</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Errors</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/error-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
            <ul>
              <li>Vous pouvez créer vos propres erreurs</li>
            </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Loop</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/loop-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Loop</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/loop-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Loop</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/loop-3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Loop</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/loop-4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Template String</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/template_string-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Utilisation des back quotes</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Context</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/context-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>obj.method = passe la définition de la method</li>
                <li>obj.method() = Passe la valeur renvoyée par l'exécution</li>
                <li>Result : Method : undefined</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Context</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/context-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>bind permet de binder la method avec l'objet</li>
                <li>method2 est une copie de method bind sur obj</li>
                <li>Result : Method : Yolo</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Context</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/context-3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Result de method : undefined</li>
                <li>Result de method1 : A</li>
                <li>Result de method2 : B</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Context</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/context-4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Garder le context de la method</li>
                <li>Que retourne u() ?</li>
                <li>cannot read property a of undefined</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Context</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/context-5.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Bind b avec this</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Callback</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/callback-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>C'est quoi b ?</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Callback</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/callback-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
            <Notes>
              <ul>
                <li>Une callback permet de laisser un bout de comportement paramètrable. </li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Promise</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/promise-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Promise</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/promise-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Promise</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/promise-3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Ajax</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Fetch</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/22.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Fetch</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/23.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Module ES6</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/module-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Module ES6</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/module-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Module ES6</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/module-3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Module CommonJS</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/module-4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Module CommonJS</Heading>
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l1-example/module-5.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Package Manager</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>NPM</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Yarn</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>package.json</Heading>
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/l1-example/package-1.json')}
            margin="20px auto"
            overflow = "overflow"
            />
            <CodePane
              lang="bash"
              source="npm install
yarn install"
              margin="20px auto"
              overflow = "overflow"
              />
            <Notes>
              <ul>
                <li>
                  --production pour ne pas installer des dépendances de dev
                </li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>package.json</Heading>
          <CodePane
            lang="json"
            source={require('raw-loader!../assets/l1-example/package-2.json')}
            margin="20px auto"
            overflow = "overflow"
            />
          <CodePane
            lang="bash"
            source="npm run myCommand
yarn run myCommand"
            margin="20px auto"
            overflow = "overflow"
            />
          <Notes>
            <ul>
              <li>
                Comme un makefile
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Semver</Heading>
          <Heading size={3}>MAJOR.MINOR.PATCH</Heading>
          <a href="https://semver.org/">Specifications</a>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Semver</Heading>
          <Heading size={3}>1.0.0</Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l1-example/semver-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Semver</Heading>
          <Heading size={3}>1.0.1</Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l1-example/semver-2.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Semver</Heading>
          <Heading size={3}>1.1.0</Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l1-example/semver-3.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Semver</Heading>
          <Heading size={3}>2.0.0</Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l1-example/semver-4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>package.json</Heading>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Constraint</TableHeaderItem>
                <TableHeaderItem>Range</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>1.X</TableItem>
                <TableItem>&gt;=1.0.0 &lt;2.0.0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>1.2.x</TableItem>
                <TableItem>&gt;=1.2.0 &lt;1.3.0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>~1.2.3</TableItem>
                <TableItem>&gt;=1.2.3 &lt;1.3.0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>~1.2</TableItem>
                <TableItem>&gt;=1.2.0 &lt;1.3.0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>~0</TableItem>
                <TableItem>&gt;=0.0.0 &lt;1.0.0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>^1.2.3</TableItem>
                <TableItem>&gt;=1.2.3 &lt;2.0.0</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>^0.2.3</TableItem>
                <TableItem>&gt;=0.2.3 &lt;0.3.0</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <a href="https://docs.npmjs.com/misc/semver">Documentation</a>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>yarn.lock</Heading>
          <CodePane
            lang="yaml"
            source={require('raw-loader!../assets/l1-example/yarn-1.yml')}
            margin="20px auto"
            overflow = "overflow"
            textSize="18px"
            />
          <Notes>
            <ul>
              <li>
                Faut-il le commit ?
              </li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" id="lesson2">
          <Heading size={1} caps>Lesson 2</Heading>
          <Heading size={2} caps>NodeJS</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            From Server to Browser...
          </Heading>
          <Notes>
            <div>On server for HTTP Server</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1}>ECMAScript Engines</Heading>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem>Name</TableHeaderItem>
                  <TableHeaderItem>Use by</TableHeaderItem>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>SpiderMonkey</TableItem>
                  <TableItem>Netscape, Firefox, GNOME 3</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Chakra</TableItem>
                  <TableItem>IE, Edge</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>V8</TableItem>
                  <TableItem>Chrome</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Tamarin</TableItem>
                  <TableItem>Adobe Flash</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Carakan</TableItem>
                  <TableItem>Opera</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>JavaScriptCore</TableItem>
                  <TableItem>Safari</TableItem>
                </TableRow>
              </TableBody>
            </Table>
            <Notes>
              <ul>
                <li>Une spec plusieures implémentations</li>
                <li>Avant Chakra était pour JScript, maintenant Javascript</li>
                <li>Tamarin supportait l'ActionScript</li>
              </ul>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1}>
              Chrome's V8 Engine
            </Heading>
            <Notes>
              <div>Open Source</div>
            </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>How it's work ?</Heading>
          <ol>
            <li>Code Parsing</li>
            <li>Interpreter and return bytecode</li>
            <li>JIT transforms bytecode to Machine code</li>
          </ol>
          <Notes>

          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            NodeJS
          </Heading>
          <Notes>
            <ul>
              <li>Written in C++</li>
              <li>One Thread</li>
              <li>Asynchronous I/O</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            Event Loop
          </Heading>
          <Image height="80%" width="80%" src={images.event_loop.replace('/', '')} />
          <Notes>

          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            require('http')
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            main.js
          </Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} cap>
            run node script
          </Heading>
          <CodePane
            lang="js"
            source="node main.js"
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            HTTP
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>HTTP</Heading>
          <Image src={images.http_message.replace('/', '')} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>HTTP</Heading>
          <Image src={images.http_header.replace('/', '')} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/7.js')}
            margin="20px auto"
            overflow = "overflow"
            />
          <Notes>
            <ul>
              <li>pathname = "/gazouilli/6"</li>
              <li>port = "9999"</li>
              <li>hostname = "localhost"</li>
              <li>query = "comment=true"</li>
            </ul>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="http"
            source={require('raw-loader!../assets/l2-example/9.http')}
            margin="20px auto"
            overflow = "overflow"
            />
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/10.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Response
          </Heading>
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/11.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
        <Terminal title="claudusd" output={[
            <Typist cursor={ cursor }>node assets/l2-example/10.js &</Typist>,
            <div>[1] 16467</div>,
            <Typist cursor={ cursor }>curl -d 'Hola' -H 'Content-Type: text/plain' http://localhost:9999</Typist>,
            <div>Hola</div>,
            <Typist cursor={ cursor }>kill 16467</Typist>,
            <div>[1]+  Complété              node assets/l2-example/10.js</div>
          ]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>require('child_process')</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="bash"
            source={require('raw-loader!../assets/l2-example/12.sh')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Terminal title="claudusd" output={[
              <Typist cursor={ cursor }>assets/l2-example/12.sh</Typist>,
              <div>1</div>,
              <div>2</div>,
              <div>3</div>,
              <div>4</div>,
              <div>5</div>
            ]}
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l2-example/child_process-1.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Terminal title="claudusd" output={[
              <Typist cursor={ cursor }>node assets/l2-example/child_process-1.js</Typist>,
              <div>stdout: 1</div>,
              <br />,
              <div>stdout: 2</div>,
              <br />,
              <div>stdout: 3</div>,
              <br />,
              <div>stdout: 4</div>,
              <br />,
              <div>stdout: 5</div>,
              <br />,
              <div>child process exited with code 0</div>
            ]}
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            require('forever')
          </Heading>
          <a href="https://www.npmjs.com/package/forever">NPM page</a>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1}>
            require('express');
          </Heading>
          <a href="https://www.npmjs.com/package/express">NPM page</a>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Lesson 3</Heading>
          <Heading size={2} caps>UI</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            HTML 5.x
          </Heading>
          <Notes>
            <div>Normé par le W3C</div>
            <div>5.2 out, draft HTML 5.3</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="html"
            source={require('raw-loader!../assets/l3-example/1.html')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
          Browser Engine
          </Heading>
          <Notes>
            <div>Read HTML</div>
            <div>Compute render</div>
            <div>Draw</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            DOM
          </Heading>
          <Notes>
            <div>Document Object Model</div>
            <div>Tree of elements</div>
            <div>W3C</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Table>
                <TableHeader>
                  <TableRow s="bold">
                    <TableHeaderItem>Window</TableHeaderItem>
                    <TableHeaderItem>Mouse</TableHeaderItem>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableItem>onabort</TableItem>
                    <TableItem>onclick</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onerror</TableItem>
                    <TableItem>ondblclick</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onload</TableItem>
                    <TableItem>onmousedown</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onbeforeunload</TableItem>
                    <TableItem>onmousemove</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onunload</TableItem>
                    <TableItem>onmouseout</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onresize</TableItem>
                    <TableItem>onmouseover</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onabort</TableItem>
                    <TableItem>onmouseup</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onabort</TableItem>
                    <TableItem>onscroll</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Table>
                <TableHeader>
                  <TableRow s="bold">
                    <TableHeaderItem>Form</TableHeaderItem>
                    <TableHeaderItem>Keyboard</TableHeaderItem>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableItem>onblur</TableItem>
                    <TableItem>onkeydown</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onchange</TableItem>
                    <TableItem>onkeypress</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onfocus</TableItem>
                    <TableItem>onkeyup</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onreset</TableItem>
                    <TableItem>onmousemove</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onselect</TableItem>
                    <TableItem>onmouseout</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem>onsubmit</TableItem>
                    <TableItem>onmouseover</TableItem>
                  </TableRow>
                </TableBody>
              </Table>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            DOM API
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="html"
            source={require('raw-loader!../assets/l3-example/2.html')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Example3_1 />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            Touching the DOM is Evil
          </Heading>
          <List>
            <ListItem>It's Hard to test</ListItem>
            <ListItem>It's expensive</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Server Rendering
          </Heading>
        </Slide>
        <Slide>
          <List>
            <ListItem>Load 1 HTML</ListItem>
            <ListItem>Load X CSS</ListItem>
            <ListItem>Load X JS</ListItem>
            <ListItem>Load X Picture</ListItem>
          </List>
          <Notes>
            <div>On each Page, load X elements, draw 1 page</div>
            <div>Limit X load in parallel</div>
            <div>Network is slow</div>
            <div>Cache some data</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            SPA
          </Heading>
          <Notes>
            <div>Single Page Application</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>Load 1 HTML</ListItem>
            <ListItem>Load X CSS</ListItem>
            <ListItem>Load X JS</ListItem>
            <ListItem>Load X Picture</ListItem>
          </List>
          <Notes>
            <div>Load html, js, css</div>
            <div>Create view</div>
            <div>After just load data</div>
            <div>Cache app in browser</div>
          </Notes>
        </Slide>
        <Slide>
          <Heading size={2}>
            Why ?
          </Heading>
          <Notes>
            <div>Faster and more user friendly</div>
          </Notes>
        </Slide>
        <Slide>
          <List>
            <ListItem>Angular 5.2</ListItem>
            <ListItem>VueJS 2.5</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            ReactJS 16.2
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>Open Source (MIT)</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>library view oriented</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            Component
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>Composable</ListItem>
            <Appear fid="1">
              <ListItem>Reusable</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Maintainable</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Testable</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component.replace('/', '')} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component1.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component2.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeListComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component3_1.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeItemComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component3_2.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeItemComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component4.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              EpisodeFormComponent
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.component5.replace('/', '')} />
          <Appear fid="1">
            <Heading size={4}>
              ButtonComponent
            </Heading>
          </Appear>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          code={require('raw-loader!../assets/l3-example/3.jsx')}
          ranges={[
            { loc: [0, 5] },
            { loc: [6, 9] },
            { loc: [10, 20] }
          ]}
          />
        <Slide transition={["fade"]} bgColor="primary">
          <Example3_3 text="Hello"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l3-example/4.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="html"
            source={require('raw-loader!../assets/l3-example/5.html')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            JSX
          </Heading>
          <Notes>
              <div>DSL</div>
              <div>Babel</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>BabelJS</Heading>
          <Image src={images.babelMeme.replace('/', '')} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>WebPack</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require('raw-loader!../assets/l3-example/6.jsx')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <CodePane
            lang="js"
            source={require('raw-loader!../assets/l3-example/7.js')}
            margin="20px auto"
            overflow = "overflow"
            />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            Lifecycle and API
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>
              componentWillMount
            </ListItem>
            <ListItem>
              componentDidMount
            </ListItem>
            <ListItem>
              componentWillUnmount
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3}>
            Virtual DOM
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <List>
            <ListItem>
              In-memory representation of the DOM
            </ListItem>
            <ListItem>
              render is called at every change of state
            </ListItem>
            <ListItem>
              React update the real DOM
            </ListItem>
            <ListItem>
              It's Fast
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Lesson 4</Heading>
          <Heading size={2} caps>CSS</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">

        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Bootstrap 4.0
          </Heading>
          <Notes>
            <div>Made by twitter, other  : foundation</div>
            <div>Written in scss</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps>Lesson 5</Heading>
          <Heading size={2} caps>Testing</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Jasmine
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Frisby
          </Heading>
          <Notes>
            <div>Testing your api</div>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2}>
            Jest
          </Heading>
          <Notes>
            <div>Testing your components</div>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
