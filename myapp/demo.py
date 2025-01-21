import gradio as gr

def greet(name, intensity):
    return "Hello, " + name + "!" * int(intensity)

d = gr.Interface(
    fn=greet,
    inputs=["text", "slider"],
    outputs=["text"],
)

demo.launch(server_name="0.0.0.0", server_port=7860)
