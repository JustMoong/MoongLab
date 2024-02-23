<script>
	import MyComponent from './MyComponent.svelte';
	let ButtonText = 'Button';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div>
    <iframe
        src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&category=_employment,_economicActivity,_inflation,_credit,_centralBanks,_confidenceIndex,_balance,_Bonds&importance=1,2,3&features=datepicker,timezone,filters&countries=110,43,17,42,5,178,32,12,26,36,4,72,10,14,48,35,37,6,122,41,22,11,25,39&calType=week&timeZone=88&lang=18" 
        width="100%"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
    ></iframe>
</div>

<MyComponent {ButtonText} />

<style>
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        
    }
    iframe{
        height: 1920px;
    }
</style>