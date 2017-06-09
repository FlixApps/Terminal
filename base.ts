## FlixApps - Open-Source Apps for TermoScript Users

$hash @_@a = ##

@user flix
@type admin
@access reg

if user.run(base.ts) then{
  prompts.popup("Are you sure you want to allow 'Terminal' to have access to your computer?", f10) = prompts.popup(live)
  prompts.popup(live.answerMe = true/false)

@base = base.ts
@main = main.ts
@scripts = "user-generated"

when run {
  go(main)
   while run {
    scripts = e.input(keys)
    if e.input(main) then {
      go(go (t /script))
    }
   }
}

hash.load = run()
loopScript(hash.load(run))
