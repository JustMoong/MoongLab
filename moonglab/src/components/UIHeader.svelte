<script>
    export let title = "Visit Apple";
    export let description = "Click the link above to visit Apple.com for more information.";
</script>

<style>
    .header {
        text-align: center;
        margin: 20px;
    }
    .link {
        font-size: 24px;
        color: blue;
        text-decoration: none;
    }
    .description {
        margin-top: 10px;
        font-size: 16px;
        color: gray;
    }
</style>

<div class="header">
    <a class="link" href="https://www.apple.com" target="_blank" rel="noopener noreferrer">{title}</a>
    <p class="description">{description}</p>
</div>