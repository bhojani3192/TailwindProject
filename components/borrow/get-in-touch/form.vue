
import type { Button } from '#build/components';

<template>
    <div class="form-wrap">

        <div class="mb-[22px] flex justify-between items-center">
            <h2>Interested in:</h2>
            <div class="btn-group gap-2">
                <Button class="active">Real Estate Project</Button>
                <Button>Crypto Loan</Button>
                <Button>Business Loan</Button>
            </div>
        </div>

        <div class="form-group">
            <input class="form-control" type="text" placeholder="Name" id="Name" name="Name" value="">
        </div>
        <div class="form-group">
            <input class="form-control" type="email" placeholder="Email" id="Email" name="Email" value="">
        </div>
        <div class="form-group">
            <input class="form-control" type="number" placeholder="Phone Number" id="phoneNumber" name="phoneNumber"
                value="">
        </div>
        <div class="form-group">
            <input class="form-control" type="text" placeholder="Subject of interest" id="postalCode" name="postalCode"
                value="">
        </div>
        <div class="form-group">
            <textarea class="form-control" placeholder="Message" id="message" name="message" value=""></textarea>
        </div>

        <div class="form-group">
            <div class="control-group">
                <input class="form-control" type="checkbox" id="terms" name="terms" value="">
                <label for="terms">I have read and I accept the <b> Terms and Conditions </b></label>
            </div>
        </div>

        <Button class="primary">SEND</Button>
    </div>
</template>
<style lang="scss" scoped>
.form-wrap {
    @apply bg-white-500 rounded-2xl drop-shadow-lg p-6 md:p-8;
    @apply w-full max-w-[526px] md:h-[670px];

    .form-group {
        @apply grid-cols-1 mb-4;

        .control-group {
            label {
                @apply max-w-full w-full text-xs font-normal;

                b {
                    @apply underline font-bold;
                }
            }
        }
    }

    Button.primary {
        @apply md:max-w-[216px] w-full;
    }

    .btn-group {
        @apply lg:flex justify-between items-center hidden;

        .btn {
            @apply bg-black-transparent-50 text-black-transparent-400 font-medium text-xs;
            @apply rounded-[40px] border-none outline-none max-w-[112px] w-[112px] max-h-[48px] py-4 px-2;
        }

        .btn.active {
            @apply bg-brand-gradient text-white-500 shadow-fill-btn-focused;
        }
    }
}
</style>