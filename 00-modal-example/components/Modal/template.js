export const template = `
<link rel="stylesheet" href="components/Modal/style.css">
<div class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <slot name="header" id="header-title"><h1>Default text</h1></slot>
        </div>
        <div class="modal-body">
            <slot><slot>
        </div>
    </div>
</div>
`;
