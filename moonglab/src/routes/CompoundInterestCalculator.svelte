<script>
    let principal = 0;  // 초기 금액
    let rate = 0;       // 연간 수익률
    let time = 0;       // 기간
    let result = 0;     // 최종 금액

    function calculateCompoundInterest() {
        amount = principal * Math.pow((1 + rate / 100), time);
    }
</script>

<main>
    <h1>Compound Interest Calculator</h1>
    <div>
        <label>
            Principal:
            <input type="number" bind:value={principal} />
        </label>
    </div>
    <div>
        <label>
            Annual Interest Rate (%):
            <input type="number" bind:value={rate} />
        </label>
    </div>
    <div>
        <label>
            Time (years):
            <input type="number" bind:value={time} />
        </label>
    </div>

    <button on:click={calculateCompoundInterest}>Calculate</button>
    <p>Result: {result.toFixed(2)}</p>
</main>