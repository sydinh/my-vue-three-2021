<template>
    <teleport to="#modals">
        <div
            ref="modal"
            tabindex="0"
            class="backdrop"
            @click.self="onClose"
            @keyup.esc="onClose"
        >
            <div class="modal">
                <div class="modal-header">
                    <h2>{{ title }}</h2>
                    <button type="button" class="button" @click="onClose">
                        &times;
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="modal-body"> Lorem ipsum dolor sit amet. </slot>
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer">
                        <button type="button" class="button" @click="onClose">
                            Close
                        </button>
                        <button type="button" class="button" @click="onSave">
                            Save changes
                        </button>
                    </slot>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    name: 'Modal',
    props: ['title'],
    mounted() {
        this.$refs.modal.focus();
    },
    methods: {
        onClose() {
            this.$emit('modal-close');
        },
        onSave() {
            console.log('Do something before closing modal');
            this.$emit('modal-close');
        },
    },
    emits: ['modal-close']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.modal {
    width: 400px;
    max-width: 100%;
    margin: 100px auto;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
}

.modal-header,
.modal-body,
.modal-footer {
    padding: 16px;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .button {
        margin: 0;
        padding: 0;
        border: 0;
    }
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    margin: 0 -8px;

    .button {
        margin: 0 8px;
    }
}
</style>
