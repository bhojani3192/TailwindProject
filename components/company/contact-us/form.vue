
import type { Button } from '#build/components';

<template>
    <div class="card contact-us-card">
        <h1 class="card-title">Contact Form</h1>

        <form>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Name" id="Name" name="Name" value="" />
            </div>
            <div class="form-group">
                <input class="form-control" type="email" placeholder="Email" id="Email" name="Email" value="" />
            </div>
            <div class="form-group">
                <input class="form-control" type="number" placeholder="Phone Number" id="phoneNumber" name="phoneNumber"
                    value="" />
            </div>
            <div class="form-group">
                <textarea class="form-control" type="text" placeholder="Message" id="Name" name="Name" value=""></textarea>
            </div>

            <div class="form-group">
                <div class="attach-file">
                    <input type="file" name="" />
                    <span class="flex">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.1124 4.6671L5.72174 9.05777C5.59439 9.18076 5.49281 9.32789 5.42293 9.49056C5.35305 9.65323 5.31627 9.82819 5.31473 10.0052C5.3132 10.1823 5.34693 10.3578 5.41397 10.5217C5.48101 10.6856 5.58002 10.8344 5.70521 10.9596C5.8304 11.0848 5.97927 11.1838 6.14313 11.2509C6.30699 11.3179 6.48256 11.3516 6.6596 11.3501C6.83664 11.3486 7.0116 11.3118 7.17427 11.2419C7.33695 11.172 7.48407 11.0704 7.60707 10.9431L11.8831 6.55244C12.3688 6.0495 12.6376 5.37589 12.6315 4.6767C12.6255 3.97751 12.345 3.30867 11.8506 2.81425C11.3562 2.31983 10.6873 2.03938 9.98814 2.0333C9.28895 2.02723 8.61534 2.29601 8.1124 2.78177L3.83573 7.17177C3.08553 7.92198 2.66406 8.93948 2.66406 10.0004C2.66406 11.0614 3.08553 12.0789 3.83573 12.8291C4.58594 13.5793 5.60345 14.0008 6.6644 14.0008C7.72536 14.0008 8.74286 13.5793 9.49307 12.8291L13.6644 8.6671"
                                stroke="#00AC99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Attach File
                    </span>
                </div>
            </div>
            <div class="form-group mt-8">
                <div class="control-group">
                    <input class="form-control" type="checkbox" id="terms" name="terms" value="">
                    <label for="terms">I agree to share my contact information to get the best financial offer</label>
                </div>
            </div>

            <Button class="primary mt-7">SEND</Button>
        </form>
    </div>
</template>
<style lang="scss" scoped>
.card.contact-us-card {
    @apply w-full xl:w-[640px] md:h-[632px] p-6 md:p-8;

    .card-title {
        @apply text-xl font-bold;
    }

    form {
        @apply w-full mt-5;

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

            .attach-file {
                @apply relative w-[100px] overflow-hidden;

                input[type=file] {
                    @apply absolute opacity-0 cursor-pointer -left-[100%] top-0;
                }

                span {
                    @apply text-sm font-bold text-brand-solid-500 items-center gap-2 underline cursor-pointer;
                }
            }
        }

        Button.btn {
            @apply md:w-[216px] w-full;
            }
    }
}
</style>