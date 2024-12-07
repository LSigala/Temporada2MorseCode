'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

  async function DecodeMorseCode(e: any){
    e.preventDefault();

    const data = {
      MorseCode: (e.target.morseCode.value)
    }

    const codeSeparated = data.MorseCode.trimStart().trimEnd().split(" ")
    
    const decodedMessage:any = []

    const MorseCodes:any = {
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '...---...': 'SOS'
  };
  let counter = 0;

  for(const item of codeSeparated){
    const space = " ";
    if(item){
      decodedMessage.push(MorseCodes[item])
    }

    if (!item && counter == 0 && codeSeparated.length != 0) {
      counter++
      decodedMessage.push(space)
    }
    
  }

  alert(decodedMessage.reduce((accumulator:any, current:any) => accumulator + current));

}

  return (
      <form onSubmit={DecodeMorseCode} className="container col-6 text-center mt-4 bg-light">
        <div>
            <div className="d-flex justify-content-center form-group">
                <div className="form-group col-5 px-md-4 mb-3">
                    <label>String</label>
                    <input type="text" className="form-control" id="morseCode" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mx-auto d-block">Send Recipe</button>
        </div>
    </form>
  );
}
