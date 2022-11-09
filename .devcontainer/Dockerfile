FROM mcr.microsoft.com/vscode/devcontainers/miniconda:0-3

USER vscode
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash - \
    && az extension add --name ml
