#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;
const Lang = imports.lang;

Gtk.init(null);

class MyWindow extends Gtk.Window {
    constructor() {
        super({ title: "Hello World" });

        this.box = new Gtk.Box({ spacing: 6 });
        this.add(this.box);

        this.button1 = new Gtk.Button({ label: "Hello" });
        this.button1.connect("clicked", MyWindow.onButton1Clicked);
        this.box.pack_start(this.button1, true, true, 0);

        this.button2 = new Gtk.Button({ label: "Goodbye" });
        this.button2.connect("clicked", MyWindow.onButton2Clicked);
        this.box.pack_start(this.button2, true, true, 0);
    }

    static onButton1Clicked(widget) {
        print("Hello");
    }

    static onButton2Clicked(widget) {
        print("Goodbye");
    }
}

GObject.registerClass(MyWindow);

let win = new MyWindow();
win.connect("delete-event", Gtk.main_quit);
win.show_all();
Gtk.main();

