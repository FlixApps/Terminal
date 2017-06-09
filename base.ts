## FlixApps - Open-Source Apps for TermoScript Users

$hash @_@a = ##

@user flix
@type admin
@access full

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
