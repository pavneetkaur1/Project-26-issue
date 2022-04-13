class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
         var options = {
          pointA : { x: 400 , y : 250},
		  bodyA : roofObject,
          pointB : {x: bob.position.x, y: bob.position.y},
		  bodyB : bob,
		  length: 325,
		  stiffness: 0.2
		 }
		
		
		con = Matter.Constraint.create(options)
		World.add(world, con);

	}

}