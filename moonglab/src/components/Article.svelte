<script>
    export let title = "Title Area";
    export let description = "Description Area.";
    export let link = "";
</script>

<style>
    .header {
        background-color: white;
        margin: 8px;
        display: inline-block;
        border-radius: 16px;
        width: 440px;
        height: 120px;
    }
    .link {
        font-size: 24px;
        color: blue;
        text-decoration: none;
    }
    .description {

        font-size: 16px;
        color: gray;
    }
</style>

<a href={link}>
<div class="header">
    <p class="link">{title}</p>
    <p class="description">{description}</p>
</div>
</a>