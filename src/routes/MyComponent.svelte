<script lang="ts">

export let ButtonText : any = "Placeholder";

</script>

<button class="TextButtonAccentFill">{ButtonText}</button>

<style>
.TextButtonAccentFill {
    display: inline-flex;
    padding: 4px 20px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border-radius: 6px;
    background: var(--Accent-Blue-Deep, #007AFF);
    border: none;
    font-size: 14px;
}
</style>