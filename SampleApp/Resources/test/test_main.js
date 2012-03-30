(function(){
	
	// To learn how to write Jasmine tests, please read Jasmine documentation:
	// https://github.com/pivotal/jasmine/wiki
	
	describe('sampleapp.main', function() {

		it('should return correct result', function() {
			expect(sampleapp.myMethod()).toBeTruthy();
			
		});	
	
		it('should fail', function() {
			expect(false).toBeFalsy();
			
		});	
	
		it('should fail with other error messages', function() {
			expect(sampleapp.myMethod()).toBe('the result');
			expect(new Date()).toBe('another date');
		});
		
		it('should fail half of the tests and pass half', function() {
			expect('po' + 'ker').toBe('poker');
			expect('po' + 'ker').toBe('another thing');
			expect(12 + 12).toBe(24);
			expect(12 + 12).toBe(12);
		});
		
		it('should not break with tests cantaining a huge amount of nonsense text in the test title', function() {
			expect(true).toBe(true);
		});
		
		it('should verify that sampleapp namespace has been activated',function(){
		 
 				expect(sampleapp.start).toBeTruthy(); 
				
		});
		
		it('should spy on a titanium object', function(){
		//	spyOn(sampleapp.start); // maybe add a .andCallThrough() to prevent null object errors 
			  // Procedure that calls Ti.UI.createWindow(..) eventually.. 
			  expect(win1.title).toBe("wat");
		});

	});
	
})();