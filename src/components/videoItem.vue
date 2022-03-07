<template>
    <div class="video__wrapper">
        <video controls loop class="video__item">
            <source :data-src="source" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>

    export default {
        name: "VideoItem",
        props: {
            source: {
                type: String,
                required: true
            }
        }
    };
</script>