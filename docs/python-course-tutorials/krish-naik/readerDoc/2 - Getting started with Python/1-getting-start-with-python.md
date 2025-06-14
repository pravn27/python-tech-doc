---
sidebar_position: 1
---

# 1 - Getting started with Python

## Using VS code IDE & setup Python environments & Python version

- VS Code
- Using Python v3.12
- create python environment with conda cmd

  - Why its required ?
    - Since while working with AI, ML projects, having multiple packages, libraries which used to get latest feature frequently, better to maintain separate envs for separate projects, should not be any conflicts with new feature of packages, libraries
  - How to create python environment with conda cmd ?

    ```
    conda create -p venv python==3.12
    ```

  - `venv` is name of environment
  - `venv` contains default packages, libraries, provides basic environment for basics projects inside `venv` folder
  - Activate venv environment by below cmd, so run any .py file inside your projects
    ```
    conda activate venv/
    ```

- In `test.ipynb` file, `.ipynb`extension stands for `Interactive Python Notebook`, used by Jupyter Notebooks / JupyterLab

- About .ipynb file - Run python code & Markdown
  - Running cmds in code cell and executed by pressing `Shift + Enter`

## Different ways of creating python Virtual Environments

1. Using Python cmd, with respect to python version in your machine

   - Run below python cmd
     ```
     python -m venv myenv
     ```
   - `myenv` is name of environment created
   - How to activate environment ?

     ```
     # On Windows
     myenv\Scripts\activate

     # On macOS/Linux
     source myenv/bin/activate
     ```

   - To deactivate environment, run below cmd
     ```
     deactivate
     ```

2. Using pip cmd

   - Run below pip cmd

     ```
     pip install virtualenv
     ```

     ```
     virtualenv -p python3 myenv
     ```

   - Activate by

     ```
     myenv\Scripts\activate
     ```

3. **Conda cmd (Recommended)**
