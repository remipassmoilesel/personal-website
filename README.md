# Personal website

<a href="https://gitlab.com/remipassmoilesel/personal-website/-/commits/main">
<img alt="pipeline status" src="https://gitlab.com/remipassmoilesel/personal-website/badges/master/pipeline.svg" />
</a>

See: [remi-pace.fr](https://remi-pace.fr)

Fedora dependencies:

    $ sudo dnf install pandoc wkhtmltopdf

Arch Linux dependencies:

    $ yay -S pandoc wkhtmltopdf-static

Format:

    $ pnpm run format

Run CI:

    $ ./scripts/continuous-integration.sh
