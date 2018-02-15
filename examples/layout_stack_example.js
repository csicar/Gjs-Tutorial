#!/usr/bin/gjs

const Gtk = imports.gi.Gtk;
const GObject = imports.gi.GObject;
const Lang = imports.lang;

Gtk.init(null);

class StackWindow extends Gtk.Window {
    constructor() {
        super({ title: "Stack Demo" });
        this.border_width = 10;

        let vbox = new Gtk.Box({ orientation: Gtk.Orientation.VERTICAL, spacing: 6 });
        this.add(vbox);

        let stack = new Gtk.Stack();
        stack.transition_type = Gtk.StackTransitionType.SLIDE_LEFT_RIGHT;
        stack.transition_duration = 1000;

        let checkbutton = new Gtk.CheckButton({ label: "Click Me" });
        stack.add_titled(checkbutton, "check", "Check Button");

        let label = new Gtk.Label();
        label.markup = "<big>A fancy label</big>";
        stack.add_titled(label, "label", "A label");

        let stackSwitcher = new Gtk.StackSwitcher();
        stackSwitcher.stack = stack;
        vbox.pack_start(stackSwitcher, true, true, 0);
        vbox.pack_start(stack, true, true, 0);
    }
}

GObject.registerClass(StackWindow);

let win = new StackWindow();
win.connect("delete-event", Gtk.main_quit);
win.show_all();
Gtk.main();
