import "./Training.css"

import library from "../Assets/powellLibrary.png"

function Training() {
  return (
    <div>
      <h1>TRAINING</h1>

      <div class="wrapper">
        <div class='center' class='blurb'>
            At Internet Bull Report at UCLA, new analysts complete an interdisciplinary training program designed to not only enhance their business and financial acumen but to bolster their critical thinking and writing skills. 
            The rigorous 4-part course provides the fundamentals for members to write coherent, compelling articles as they engage with the world of finance.
        </div>

        <div class='container'>
            <div class='numeral'>1. Intro to Finance</div>
            <div class='content'>Introduction to investing, stock market, and financial commentary</div>

            <div class='numeral'>2. Research</div>
            <div class='content'>Learn how to conduct in-depth research and analysis into securities</div>

            <div class='numeral'>3. Financial Articles</div>
            <div class='content'>Learn content curation, article research, and financial writing</div>

            <div class='numeral'>4. Publishing</div>
            <div class='content'>Learn how to publish and promote your financial articles</div>
        </div>

        <img class="powell-img" src={library} alt="powell"></img>   
      </div> 
    </div>
  );
}

export default Training;
